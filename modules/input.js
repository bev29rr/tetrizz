import { pieceTranspose } from './piece.js';

export function moveLeft(piece) {
    console.log(piece);
    return pieceTranspose([-1, 0], piece);
}

export function moveRight(piece) {
    console.log(piece);
    return pieceTranspose([1, 0], piece);
}