import { initDisplay, drawGrid, drawPieces } from "./modules/canvas.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const canvas = initDisplay('canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 12;

    let grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(null));

    drawPieces(canvas, ctx, grid);
    drawGrid(canvas, ctx, gridSize, gridSize);
});