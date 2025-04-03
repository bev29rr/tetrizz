import { initDisplay, drawGrid, drawPieces } from "./modules/canvas.js"; 
import { placePieceOnGrid, randomPiece, randomColor, pieceTranspose, pieceDown } from "./modules/piece.js";

const FALL_TIME = 100;

function pieceDrop(canvas, ctx, gridSize, grid, piece, color) {
    let newPiece = pieceDown(grid, piece);

    if (newPiece === false) return false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let pieceGrid = placePieceOnGrid(grid, newPiece, color);

    drawPieces(canvas, ctx, pieceGrid);
    drawGrid(canvas, ctx, gridSize, gridSize);
    return newPiece;
}

// piece animate is better as a promise as it needs to Promise<piece>
function pieceAnimateDrop(canvas, ctx, gridSize, grid, currentPiece, color) {
    return new Promise((resolve) => {
        let tick = 0;
        // tick allows for immediate change of direction of tile
        // however, it is very expensive
        function animate(piece, tick) {
            if (tick >= FALL_TIME) {
                let pieceResult = pieceDrop(canvas, ctx, gridSize, grid, piece, color);

                if (pieceResult === false) {
                    resolve(piece); 
                } else {
                    let newPiece = pieceResult;

                    setTimeout(() => animate(newPiece, 0), 10);
                }
            } else {
                setTimeout(() => animate(piece, tick+1), 10);
            }
        }
        animate(currentPiece, tick);
    });
}

async function gameAnimate(canvas, ctx, gridSize, grid) {
    return new Promise(async(resolve) => {
        let currentPiece = pieceTranspose([5, 0], randomPiece());
        let currentColor = randomColor();

        let pieceGrid = placePieceOnGrid(grid, currentPiece, currentColor);    
        drawPieces(canvas, ctx, pieceGrid);
        drawGrid(canvas, ctx, gridSize, gridSize);

        let newPiece = await pieceAnimateDrop(canvas, ctx, gridSize, grid, currentPiece, currentColor);
        console.log("newPiece:", newPiece);
    });
}

function webTetrizz() {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));

    gameAnimate(canvas, ctx, gridSize, grid);
}

document.addEventListener('keydown', (e) => {
    if (e.code === "ArrowLeft") {
        console.log('1');
    } else if (e.code === "ArrowRight") {
        console.log('2');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    webTetrizz();
}, { once: true });