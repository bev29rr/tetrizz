export function initDisplay(id) {
    const canvas = document.getElementById(id);
    canvas.height = window.innerHeight;
    canvas.width = canvas.height;
    return canvas;
}

export function drawGrid(ctx, rows, cols) {
    ctx.strokeStyle = "black";
    const cellSize = canvas.height / rows;

    for (let col = 0; col <= cols; col++) {
        let x = col * cellSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rows * cellSize);
        ctx.stroke();
    }

    for (let row = 0; row <= rows; row++) {
        let y = row * cellSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(cols * cellSize, y);
        ctx.stroke();
    }
}