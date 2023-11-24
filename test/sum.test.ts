import { add } from '../src/sum'
import {expect, test} from '@jest/globals';

test('additionner 1 + 2 donne 3', () => {
    expect(add(1, 2)).toBe(3);
});