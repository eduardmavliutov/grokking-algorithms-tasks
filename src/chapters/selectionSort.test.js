import { selectionSort } from './selectionSort'
import { test, expect, describe } from 'vitest'

describe('selection sort tests', () => {
  const numbers = [33, 31, 9, 3, 32, 99, 332, 4]

  test('selectionSort sort an array', () => {  
    expect(selectionSort(numbers)).toEqual([3, 4, 9, 31, 32, 33, 99, 332])
  })
})
