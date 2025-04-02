const GRID_SIZE = [4, 10];

function initDisplay(id) {
    const canvas = document.getElementById(id);
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight;
    return canvas;
}

function drawGrid(canvas) {
    let ctx = canvas.getContext('2d');
    const leftSpacing = canvas.width / 4;
    for (let i = 0; i < GRID_SIZE[2]; i++) {
        ctx.moveTo(
            leftSpacing,
            i * (canvas.height / GRID_SIZE[1])
        );
        ctx.lineTo(
            canvas.width - leftSpacing,
            i * (canvas.height / GRID_SIZE[1])
        );
        ctx.stroke();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = initDisplay('canvas');
    let ctx = canvas.getContext('2d');

    /*
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
    */
   drawGrid(canvas);
});