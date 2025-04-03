import { checkSquare, pieceTranspose } from './piece.js';

export function moveLeft(grid, piece) {
    if (!checkSquare(grid, sideSquare(piece, true))) return piece;
    return pieceTranspose([-1, 0], piece);
}

export function moveRight(grid, piece) {
    if (!checkSquare(grid, sideSquare(piece, false))) return piece;
    return pieceTranspose([1, 0], piece);
}

// bool for left
function sideSquare(piece, left) {

    let checkDigit = left ? -1 : 1;
    let sideCheckSquare = pieceTranspose([checkDigit, 0], [...piece].map(pos => [...pos]));
    
    if (left) {
        sideCheckSquare.sort((a, b) => a[0] - b[0]);
    } else {
        sideCheckSquare.sort((a, b) => b[0] - a[0]);
    }
    return sideCheckSquare[0];
}