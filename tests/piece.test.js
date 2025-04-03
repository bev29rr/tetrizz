import { checkSquare } from '../modules/piece.js';

const grid1 = new Array(10).fill(null).map(() => new Array(10).fill(null));

test('checkSquare()', () => {
    expect(checkSquare(grid1, [0,0])).toEqual(true);
    expect(checkSquare(grid1, [9,9])).toEqual(true);
    expect(checkSquare(grid1, [10,9])).toEqual(false);
    expect(checkSquare(grid1, [13,9])).toEqual(false);
    expect(checkSquare(grid1, [2,12])).toEqual(false);
    expect(checkSquare(grid1, [9,0])).toEqual(true);
});