import { initDisplay, drawGrid, drawPieces } from "./modules/canvas.js"; 
import { placePieceOnGrid, randomPiece, randomColor, pieceTranspose, pieceDown } from "./modules/piece.js";

const FALL_TIME = 3000;

function pieceDrop(canvas, ctx, gridSize, grid, piece, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let newPiece = pieceDown(grid, piece);

    if (piece === false) return false;
    let pieceGrid = placePieceOnGrid(grid, newPiece, color);

    drawPieces(canvas, ctx, pieceGrid);
    drawGrid(canvas, ctx, gridSize, gridSize);
    return newPiece;
}

function pieceAnimateDrop(canvas, ctx, gridSize, grid, currentPiece, color) {
    let pieceResult = pieceDrop(canvas, ctx, gridSize, grid, currentPiece, color);

    if (pieceResult === false) {
        return; 
    } else {
        let newPiece = pieceResult;

        setTimeout(function() {
            pieceAnimateDrop(canvas, ctx, gridSize, grid, newPiece, color);
        }, FALL_TIME);
    }
}
function webTetrizz() {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));
    let currentPiece = pieceTranspose([5, 0], randomPiece());
    let currentColor = randomColor();

    let pieceGrid = placePieceOnGrid(grid, currentPiece, currentColor);    
    drawPieces(canvas, ctx, pieceGrid);
    drawGrid(canvas, ctx, gridSize, gridSize);

    setTimeout(function() {
        pieceAnimateDrop(canvas, ctx, gridSize, grid, currentPiece, currentColor)
    }, FALL_TIME);
}

document.addEventListener('DOMContentLoaded', () => {
    webTetrizz();
}, { once: true });