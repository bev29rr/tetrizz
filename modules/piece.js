// Personally, I would make this an object called piece and all of these would be methods

import { checkSquare } from "../main.js"; 

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

// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
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
    piece = piece.map(([x, y]) => [ x + position[0], y + position[1] ]);
    return piece;
}

export function placePieceOnGrid(grid, piece, color) {
    let bufferGrid = grid.slice(0);
    for (let i = 0; i < piece.length; i++) {
        for (let j = 0; j < piece[i].length; j++) {
            bufferGrid[piece[i][0]][piece[i][1]] = color;
        }
    }
    return bufferGrid;
}

export function pieceDown(grid, piece) {
    for (let i = 0; i < piece.length; i++) {
        if (!checkSquare(grid, piece[i])) return false;
    }

    return pieceTranspose([0, 1], piece)
}

// left parameter is bool and if true, piece is rotated left; if false, piece is rotated right
export function pieceRotate(piece, left) {

}