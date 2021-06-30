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

const mockBug = jest.fn((length, name, direction = 'horizontal') => {
    return {
        length,
        name,
        direction,
    };
});

test('place a 2-unit bug in top left corner horizontally', () => {
    const board = new Board();
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

test('place a bug in the middle of the board horizontally', () => {
    const board = new Board();
    board.placeBug(new mockBug(2, 'Spider'), 5, 5);
    expect(board.coordinates).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 'Spider', 'Spider', null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('place a bug vertically', () => {
    const board = new Board();
    board.placeBug(new mockBug(2, 'Spider', 'vertical'), 0, 0);
    expect(board.coordinates).toStrictEqual([
        ['Spider', null, null, null, null, null, null, null, null, null],
        ['Spider', null, null, null, null, null, null, null, null, null],
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

test('place a bug in the middle of the board vertically', () => {
    const board = new Board();
    board.placeBug(new mockBug(2, 'Spider', 'vertical'), 5, 5);
    expect(board.coordinates).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 'Spider', null, null, null, null],
        [null, null, null, null, null, 'Spider', null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('do not allow bug to be placed too far to the left', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(2, 'Spider', 'vertical'), -1, 5)
    ).toThrow('cannot place bug off the grid');
});

test('do not allow bug to be placed too far to the right', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(2, 'Spider', 'vertical'), 10, 5)
    ).toThrow('cannot place bug off the grid');
});

test('do not allow bug to be placed too far to the right accounting for its length', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(4, 'Catepillar', 'horizontal'), 7, 5)
    ).toThrow('cannot place bug off the grid');
});
