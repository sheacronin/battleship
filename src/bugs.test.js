/* eslint-disable no-undef */
import Bug from './bugs';

test('has a units prop that is an array of inputted length with "safe" values', () => {
    expect(new Bug(2).units).toStrictEqual(['safe', 'safe']);
});

test('hit function modifies hit unit', () => {
    const bug3 = new Bug(3);
    expect(bug3.units).toStrictEqual(['safe', 'safe', 'safe']);
    bug3.hit(1);
    expect(bug3.units).toStrictEqual(['safe', 'hit', 'safe']);
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

test('swat a single-unit bug', () => {
    const bug = new Bug(1);
    bug.hit(0);
    expect(bug.isSwatted()).toBe(true);
});

test('isSwatted returns false for partially hit bug', () => {
    const bug = new Bug(2);
    bug.hit(0);
    expect(bug.isSwatted()).toBe(false);
});

test('bugs return a name', () => {
    expect(new Bug(2, 'Spider').name).toBe('Spider');
});

test('default bug direction is horizontal', () => {
    expect(new Bug(2, 'Spider').direction).toBe('horizontal');
});

test('set bug direction to vertical', () => {
    expect(new Bug(2, 'Spider', 'vertical').direction).toBe('vertical');
});

test('bugs throw error if hit on unit that has already been hit', () => {
    const spider = new Bug(2, 'Spider');
    spider.hit(1);
    expect(() => spider.hit(1)).toThrow('already hit this index');
});
