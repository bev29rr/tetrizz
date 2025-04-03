// Personally, I would make this an object called piece and all of these would be methods

export function checkSquare(grid, position) {
    if (position[0] >= grid.length || position[1] >= grid[0].length) return false;
    return grid[position[0]][position[1]] === null;
}

const pieces = [
    [[0, 0], [0, 1], [0, 2], [1, 2]],
    [[0, 0], [0, 1], [0, 2]],
    [[0, 0], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 0], [1, 0], [1, 1], [2, 1]]
];

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'lightblue'
];

// randomArr function: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomPiece() {
    return randomArr(pieces);
}

export function randomColor() {
    return randomArr(colors);
}

// move a piece a certain x and y
export function pieceTranspose(position, piece) {
    piece = [...piece]
        .map(([x, y]) => [ x + position[0], y + position[1] ]);
    return piece;
}

export function placePieceOnGrid(grid, piece, color) {
    let bufferGrid = [...grid].map(row => [...row]);

    // easier iteration of coordinates
    for (let [x, y] of piece) {
        if (x >= 0 && x < bufferGrid.length && y >= 0 && y < bufferGrid[0].length) {
            bufferGrid[x][y] = color;
        }
    }
    return bufferGrid;
}

export function pieceDown(grid, piece) {
    let newPiece = pieceTranspose([0, 1], piece);
    for (let i = 0; i < piece.length; i++) {
        if (!checkSquare(grid, newPiece[i])) return false;
    }

    return newPiece;
}

// left parameter is bool and if true, piece is rotated left; if false, piece is rotated right
export function pieceRotate(piece, left) {

}