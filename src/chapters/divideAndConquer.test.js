import { expect, describe, test } from 'vitest';
import { sumArrayRecursively } from './divideAndConquer';

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
})