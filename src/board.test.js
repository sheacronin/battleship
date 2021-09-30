/* eslint-disable no-undef */
import Board from './board';

test('first row of board is an array with length of 10', () => {
    expect(new Board().grid[0].length).toBe(10);
});

test('init grid is a 10x10 2D array of null values', () => {
    expect(new Board().grid).toStrictEqual([
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
        hit() {},
    };
});

test('place a 2-unit bug in top left corner horizontally', () => {
    const board = new Board();
    const spider = new mockBug(2, 'Spider');
    board.placeBug(spider, 0, 0);
    expect(board.grid).toStrictEqual([
        [
            [spider, 0],
            [spider, 1],
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ],
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
    const spider = new mockBug(2, 'Spider');
    board.placeBug(spider, 5, 5);
    expect(board.grid).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [
            null,
            null,
            null,
            null,
            null,
            [spider, 0],
            [spider, 1],
            null,
            null,
            null,
        ],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('place a bug vertically', () => {
    const board = new Board();
    const spider = new mockBug(2, 'Spider', 'vertical');
    board.placeBug(spider, 0, 0);
    expect(board.grid).toStrictEqual([
        [[spider, 0], null, null, null, null, null, null, null, null, null],
        [[spider, 1], null, null, null, null, null, null, null, null, null],
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
    const spider = new mockBug(2, 'Spider', 'vertical');
    board.placeBug(spider, 5, 5);
    expect(board.grid).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, [spider, 0], null, null, null, null],
        [null, null, null, null, null, [spider, 1], null, null, null, null],
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
        board.placeBug(new mockBug(4, 'Caterpillar', 'horizontal'), 7, 5)
    ).toThrow('cannot place bug off the grid');
});

test('do not allow bug to be placed too far up', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(2, 'Spider', 'vertical'), 0, -1)
    ).toThrow('cannot place bug off the grid');
});

test('do not allow bug to be placed too far down', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(2, 'Spider', 'horizontal'), 5, 10)
    ).toThrow('cannot place bug off the grid');
});

test('do not allow bug to be placed too far down accounting for its length', () => {
    const board = new Board();
    expect(() =>
        board.placeBug(new mockBug(4, 'Caterpillar', 'vertical'), 5, 7)
    ).toThrow('cannot place bug off the grid');
});

test('place multiple bugs', () => {
    const board = new Board();
    const spider = new mockBug(2, 'Spider', 'vertical');
    const caterpillar = new mockBug(4, 'Caterpillar', 'horizontal');
    board.placeBug(spider, 5, 5);
    board.placeBug(caterpillar, 0, 0);

    expect(board.grid).toStrictEqual([
        // prettier-ignore
        [[caterpillar, 0], [caterpillar, 1], [caterpillar, 2], [caterpillar, 3], null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, [spider, 0], null, null, null, null],
        [null, null, null, null, null, [spider, 1], null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('do not allow bug to be placed on top of other bug', () => {
    const board = new Board();
    board.placeBug(new mockBug(4, 'Caterpillar', 'horizontal'), 0, 0);
    expect(() =>
        board.placeBug(new mockBug(2, 'Spider', 'vertical'), 2, 0)
    ).toThrow('there is already another bug here!');
});

test('do not allow end length of horizontal bug to be placed on top of other bug', () => {
    const board = new Board();
    board.placeBug(new mockBug(2, 'Spider', 'horizontal'), 5, 5);
    expect(() =>
        board.placeBug(new mockBug(4, 'Caterpillar', 'horizontal'), 2, 5)
    ).toThrow('there is already another bug here!');
});

test('receives a missing attack', () => {
    const board = new Board();
    expect(board.receiveAttack(0, 0)).toStrictEqual(['miss', [0, 0]]);
});

test('receives a hit attack', () => {
    const board = new Board();
    const spider = new mockBug(2, 'Spider', 'horizontal');
    board.placeBug(spider, 0, 0);
    expect(board.receiveAttack(0, 0)).toStrictEqual([spider, [0, 0]]);
});

test('tracks missed attack', () => {
    const board = new Board();
    board.receiveAttack(0, 0);
    expect(board.grid).toStrictEqual([
        ['miss', null, null, null, null, null, null, null, null, null],
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

test('tracks several missed attacks', () => {
    const board = new Board();
    board.receiveAttack(0, 0);
    board.receiveAttack(2, 7);
    board.receiveAttack(4, 3);
    expect(board.grid).toStrictEqual([
        ['miss', null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 'miss', null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, 'miss', null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
    ]);
});

test('stores bugs in prop when placed', () => {
    const board = new Board();
    const spider = new mockBug(2, 'Spider', 'vertical');
    const caterpillar = new mockBug(4, 'Caterpillar', 'horizontal');
    board.placeBug(spider, 5, 5);
    board.placeBug(caterpillar, 0, 0);
    expect(board.bugs).toStrictEqual([spider, caterpillar]);
});

test('throws an error if it receives an attack on a unit that has already been attacked', () => {
    const board = new Board();
    board.receiveAttack(0, 0);
    expect(() => board.receiveAttack(0, 0)).toThrow(
        'this unit has already been attacked!'
    );
});
