/* eslint-disable no-undef */
import Bug from './bugs';

test('has a units prop that is an array of inputted length with undef values', () => {
    expect(new Bug(2).units).toStrictEqual([0, 0]);
});

test('hit function modifies hit unit', () => {
    const bug3 = new Bug(3);
    expect(bug3.units).toStrictEqual([0, 0, 0]);
    bug3.hit(1);
    console.log(bug3.units);
    expect(bug3.units).toStrictEqual([0, 'hit', 0]);
});
