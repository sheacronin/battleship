/* eslint-disable no-undef */
import Player from './player';

test('player can attack', () => {
    const player = new Player();
    expect(player.attack()).toStrictEqual([0, 0]);
});

test('computer player returns valid random attack coordinates', () => {
    const computer = new Player(true);
    const [x, y] = computer.attack();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(10);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(10);
});
