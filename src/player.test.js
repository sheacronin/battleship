/* eslint-disable no-undef */
import Player from './player';

const mockBoard = jest.fn(() => {
    const receiveAttack = jest.fn();
    return {
        receiveAttack,
    };
});

test('player can attack', () => {
    const player = new Player('Bob', new mockBoard());
    expect(player.attack(0, 0)).toStrictEqual([0, 0]);
});

test('player is computer if name === "Computer"', () => {
    expect(new Player('Computer').isComputer).toBe(true);
});

test('player with any other name is not a computer', () => {
    expect(new Player('Bob').isComputer).toBe(false);
});

test('computer player returns valid random attack coordinates', () => {
    const computer = new Player('Computer', new mockBoard());
    const [x, y] = computer.attack();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(10);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(10);
});

test('player uses first constructor arg as name', () => {
    expect(new Player('Shea').name).toBe('Shea');
});

test('player inits with it not being their turn', () => {
    expect(new Player('Computer').isMyTurn).toBe(false);
});

test('player can switch to it being their turn', () => {
    const player = new Player('Computer');
    expect(player.isMyTurn).toBe(false);
    player.switchTurn();
    expect(player.isMyTurn).toBe(true);
});

test('player can switch to it not being their turn', () => {
    const player = new Player('Computer');
    expect(player.isMyTurn).toBe(false);
    player.switchTurn();
    expect(player.isMyTurn).toBe(true);
    player.switchTurn();
    expect(player.isMyTurn).toBe(false);
});

test('player has a enemyBoard property', () => {
    const exampleEnemyBoard = new mockBoard();
    expect(new Player('Computer', exampleEnemyBoard).enemyBoard).toBe(
        exampleEnemyBoard
    );
});

test('on player attack, enemyBoard.receiveAttack runs', () => {
    const exampleEnemyBoard = new mockBoard();
    const player = new Player('Computer', exampleEnemyBoard);
    player.attack();
    expect(exampleEnemyBoard.receiveAttack).toHaveBeenCalled();
});

test('throws an error when trying to attack without an enemyBoard assigned', () => {
    const player = new Player('Computer');
    expect(() => player.attack()).toThrow(
        'player must have an enemy board to attack'
    );
});
