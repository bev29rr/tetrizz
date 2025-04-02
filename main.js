import { initDisplay, drawGrid, drawPieces } from "./modules/canvas.js"; 
import { placePieceOnGrid, randomPiece, randomColor, pieceTranspose, pieceDown } from "./modules/piece.js";

export function checkSquare(grid, position) {
    if (grid[position[0]][position[1]] === null) { 
        return true;
    } else { 
        return false;
    }
}

function webTetrizz() {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));
    let currentPiece = pieceTranspose([5, 0], randomPiece());
    console.log(grid);
    let pieceGrid = placePieceOnGrid([...grid], currentPiece, randomColor());
    //console.log(grid);
    
    //drawPieces(canvas, ctx, pieceGrid);
    //drawGrid(canvas, ctx, gridSize, gridSize);

    /* 
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //console.log(currentPiece, grid);
        currentPiece = pieceDown(grid, currentPiece);
        //console.log(currentPiece);
        let pieceGrid = placePieceOnGrid(grid, currentPiece, randomColor());
        
        drawPieces(canvas, ctx, pieceGrid);
        drawGrid(canvas, ctx, gridSize, gridSize);
    }, 1000); */
}

document.addEventListener('DOMContentLoaded', () => {
    webTetrizz();
});