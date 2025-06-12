import {expect, test} from 'vitest'
import sum from './jsFun'

test('adds some numbers', () => {
    expect(sum(4, 5)).toBe(9)
})