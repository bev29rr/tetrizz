import { initDisplay, drawGrid, drawPieces, screenUpdate } from "./modules/canvas.js"; 
import { placePieceOnGrid, randomPiece, randomColor, pieceTranspose, pieceDown } from "./modules/piece.js";
import { moveLeft } from "./modules/input.js";

const FALL_TIME = 100;

// keypressed has to be global
const keypressed = {
    'key': '',
    'lastTick': 0
};

function pieceDrop(canvas, ctx, grid, piece, color) {
    let newPiece = pieceDown(grid, piece);
    console.log(newPiece);

    if (newPiece === false) return false;
    
    screenUpdate(canvas, ctx, grid, piece, color);
    return newPiece;
}

// piece animate is better as a promise as it needs to Promise<piece>
function pieceAnimateDrop(canvas, ctx, grid, currentPiece, color) {
    return new Promise((resolve) => {
        let tick = 0;
        // tick allows for immediate change of direction of tile
        // however, it is very expensive
        function tickPieceDrop(piece, tick) {
            if (tick >= FALL_TIME) {
                let pieceResult = pieceDrop(canvas, ctx, grid, piece, color);

                if (pieceResult === false) {
                    resolve(piece); 
                } else {
                    let newPiece = pieceResult;
                    setTimeout(() => tickPieceDrop(newPiece, 0), 10);
                }
            } else {
                if (keypressed['key'] === 'left') {
                    if (Date.now() - keypressed['lastTick'] > 100) {
                        piece = moveLeft(piece);
                        keypressed['lastTick'] = Date.now();
                        // screenUpdate(canvas, ctx, grid, piece, color);
                    }
                }
                setTimeout(() => tickPieceDrop(piece, tick+1), 10);
            }
        }
        tickPieceDrop(currentPiece, tick);
    });
}

async function gameAnimate(canvas, ctx, grid) {
    return new Promise(async(resolve) => {
        let currentPiece = pieceTranspose([5, 0], randomPiece());
        let currentColor = randomColor();

        screenUpdate(canvas, ctx, grid, currentPiece, currentColor);

        let newPiece = await pieceAnimateDrop(canvas, ctx, grid, currentPiece, currentColor);
        console.log("newPiece:", newPiece);
    });
}

function webTetrizz() {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));

    gameAnimate(canvas, ctx, grid);
}

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowLeft") {
        keypressed['key'] = 'left';
        keypressed['tick'] = Date.now();
    } else if (e.code === "ArrowRight") {
        keypressed['key'] = 'right';
        keypressed['tick'] =  Date.now();
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
        keypressed['key'] = "";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    webTetrizz();
}, { once: true });