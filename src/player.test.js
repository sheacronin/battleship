/* eslint-disable no-undef */
import Player from './player';

test('player can attack', () => {
    const player = new Player();
    expect(player.attack()).toStrictEqual([0, 0]);
});

test('player is computer if name === "Computer"', () => {
    expect(new Player('Computer').isComputer).toBe(true);
});

test('player with any other name is not a computer', () => {
    expect(new Player('Bob').isComputer).toBe(false);
});

test('computer player returns valid random attack coordinates', () => {
    const computer = new Player('Computer');
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
