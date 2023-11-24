import {expect, test} from '@jest/globals';
import {greet} from "../src/name";

test('saluer avec un nom', () => {
    expect(greet('Alice')).toBe('Bonjour, Alice!');
});

test('saluer sans nom', () => {
    expect(greet(null)).toBe('Bonjour, invité!');
});