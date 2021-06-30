/* eslint-disable no-undef */
import Bug from './bugs';

test('has a units prop that is an array of inputted length with undef values', () => {
    expect(new Bug(2).units).toStrictEqual([0, 0]);
});

test('hit function modifies hit unit', () => {
    const bug3 = new Bug(3);
    expect(bug3.units).toStrictEqual([0, 0, 0]);
    bug3.hit(1);
    expect(bug3.units).toStrictEqual([0, 'hit', 0]);
});

test('hit method does not accept too large indecies', () => {
    const bug2 = new Bug(2);
    expect(() => bug2.hit(4)).toThrow('invalid target index');
});

test('hit method does not accept negative indecies', () => {
    const bug1 = new Bug(1);
    expect(() => bug1.hit(-1)).toThrow('invalid target index');
});
