import { factorial, raiseToPower } from './recursion'
import { expect, test, describe } from 'vitest'

describe('recursion tests', () => {
  test('factorial of 5 equals 120', () => {
    const result = factorial(5)
    expect(result).toBe(120)
  })
  
  test('factorial of 1 equals 1', () => {
    const result = factorial(1)
    expect(result).toBe(1)
  })

  test('2 in the third power equals 8', () => {
    expect(raiseToPower(2, 3)).toBe(8)
  })

  test('number in the zeroth power equals 1', () => {
    expect(raiseToPower(3, 0)).toBe(1)
  })
})