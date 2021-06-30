/* eslint-disable no-undef */
import Bug from './bugs';

test('has a units prop that is an array of inputted length with null values', () => {
    expect(new Bug(2).units).toStrictEqual([null, null]);
});

test('hit function modifies hit unit', () => {
    const bug3 = new Bug(3);
    expect(bug3.units).toStrictEqual([null, null, null]);
    bug3.hit(1);
    expect(bug3.units).toStrictEqual([null, 'hit', null]);
});

test('hit method does not accept too large indecies', () => {
    const bug2 = new Bug(2);
    expect(() => bug2.hit(4)).toThrow('invalid target index');
});

test('hit method does not accept negative indecies', () => {
    const bug1 = new Bug(1);
    expect(() => bug1.hit(-1)).toThrow('invalid target index');
});

test('isSwatted returns false for initial bug', () => {
    expect(new Bug(2).isSwatted()).toBe(false);
});
