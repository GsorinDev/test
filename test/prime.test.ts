import {expect, test} from '@jest/globals';
import {isPrime} from "../src/prime";

test('5 est un nombre premier', () => {
    expect(isPrime(5)).toBeTruthy();
});

test('4 n\'est pas un nombre premier', () => {
    expect(isPrime(4)).toBeFalsy();
});

test('0 et 1 ne sont pas des nombres premiers', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
});

test('2 est un nombre premier', () => {
    expect(isPrime(2)).toBeTruthy();
});