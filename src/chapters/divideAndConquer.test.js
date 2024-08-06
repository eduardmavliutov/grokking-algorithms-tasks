import { expect, describe, test } from 'vitest';
import { sumArrayRecursively, quickSort } from './divideAndConquer';

describe('devide and conquer tests', () => {
  test('sumArrayRecursively returns 0 for an empty array', () => {
    expect(sumArrayRecursively([])).toBe(0)
  })

  test('sumArrayRecursively returns 0 if anything but array is passed', () => {
    expect(sumArrayRecursively(undefined)).toBe(0)
  })

  test('sumArrayRecursively returns the only item as a sum if array contains only 1 item', () => {
    expect(sumArrayRecursively([9])).toBe(9)
  })

  test('sumArrayRecursively counts sum properly for', () => {
    expect(sumArrayRecursively([1, 2, 3, 4])).toBe(10)
  })

  test('quickSort returns the same array if array contains only 1 item', () => {
    expect(quickSort([33])).toEqual([33])
  })

  test('quickSort sorts an array that contains 2 items', () => {
    expect(quickSort([33, 11])).toEqual([11, 33])
  })

  test('quickSort sorts an array', () => {
    expect(quickSort([33, 11, 3, 4, 99, 415, 43])).toEqual([3, 4, 11, 33, 43, 99, 415])
  })
})