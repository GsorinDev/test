import {expect, test} from '@jest/globals';
import {divide} from "../src/divide";

test('diviser 6 par 3 donne 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('division par zéro lance une erreur', () => {
    expect(() => divide(6, 0)).toThrow('Division par zéro!');
});