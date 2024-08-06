import { getNumberIndexInArray } from './binarySearch'
import { test, expect, describe } from 'vitest'

describe('binary search tests', () => {
  const numbers = [1, 5, 77, 99, 111, 223, 555, 1000]

  test('getNumberIndexInArray finds number', () => {  
    expect(getNumberIndexInArray(numbers, 111)).toBe(4)
  })
  
  test('getNumberIndexInArray returns null if it does not find a number', () => {
    expect(getNumberIndexInArray(numbers, 1111)).toBe(null)
  })
})
