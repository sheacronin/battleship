/* eslint-disable no-undef */
import Bug from './bugs';

test('returns an object with a length prop', () => {
    expect(new Bug(1)).toEqual({ length: 1 });
});
