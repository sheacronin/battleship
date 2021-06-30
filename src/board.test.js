/* eslint-disable no-undef */
import Board from './board';

test('first row of board is an array with length of 10', () => {
    expect(new Board().coordinates[0].length).toBe(10);
});

test('init coordinates is a 10x10 2D array of null values', () => {
    expect(new Board().coordinates).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('place a 2-unit bug in top left corner horizontally', () => {
    const board = new Board();
    const mockBug = jest.fn((length, name) => {
        return {
            length,
            name,
        };
    });
    board.placeBug(new mockBug(2, 'Spider'), 0, 0);
    expect(board.coordinates).toStrictEqual([
        ['Spider', 'Spider', null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});