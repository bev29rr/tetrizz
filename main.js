import { initDisplay, drawGrid } from "./modules/canvas"; 

document.addEventListener('DOMContentLoaded', () => {
    const canvas = initDisplay('canvas');

    /*
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
    */
    drawGrid(canvas.getContext('2d'), 12, 12);
});