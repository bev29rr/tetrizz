import { initDisplay, drawGrid, drawPieces } from "./modules/canvas.js"; 
import { placePieceOnGrid, randomPiece, randomColor, pieceTranspose, pieceDown } from "./modules/piece.js";

function pieceDrop(canvas, ctx, grid, piece, color) {
    console.log('omg');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    piece = pieceDown(grid, piece);
    let pieceGrid = placePieceOnGrid(grid, currentPiece, color);
    
    drawPieces(canvas, ctx, pieceGrid);
    drawGrid(canvas, ctx, gridSize, gridSize);
}

function webTetrizz() {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));
    let currentPiece = pieceTranspose([5, 0], randomPiece());
    let currentColor = randomColor();

    let pieceGrid = placePieceOnGrid(grid, currentPiece, randomColor());    
    drawPieces(canvas, ctx, pieceGrid);
    drawGrid(canvas, ctx, gridSize, gridSize);

    setTimeout(pieceDrop, 1000, canvas, ctx, grid, currentPiece, currentColor); 
}

document.addEventListener('DOMContentLoaded', () => {
    webTetrizz();
}, { once: true });