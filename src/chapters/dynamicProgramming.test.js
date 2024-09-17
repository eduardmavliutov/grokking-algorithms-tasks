import { fillKnapsack, getTheLongestSubString, getTheLongestSubSequence, visitPlaces } from './dynamicProgramming'
import { expect, describe, test } from 'vitest'

describe('dynamic programming', () => {
  test('visit places', () => {
    const places = [{
      timeToVisit: 12,
      name: 'Westminster Abbey',
      points: 7
    },
    {
      timeToVisit: 12,
      name: 'Globe Theatre',
      points: 6
    },
    {
      timeToVisit: 24,
      name: 'National Gallery',
      points: 9
    },
    {
      timeToVisit: 48,
      name: 'British Museum',
      points: 9
    },
    {
      timeToVisit: 12,
      name: 'St Paul\'s Cathedral',
      points: 8
    },
  ]
    expect(visitPlaces(places, 48)).toBe(24)
  })

  test('fillKnapsack', () => {
    const items = [{
      weight: 5,
      name: 'Recorder',
      price: 10
    },
    {
      weight: 4,
      name: 'Playstation',
      price: 40
    },
    {
      weight: 6,
      name: 'XBox',
      price: 30
    },
    {
      weight: 3,
      name: 'TV',
      price: 50
    },
  ]
    expect(fillKnapsack(items, 10)).toBe(90)
  })

  test('longest substring', () => {
    expect(getTheLongestSubString('fish', 'hish')).toBe(3)
    expect(getTheLongestSubString('fish', 'vista')).toBe(2)
    expect(getTheLongestSubString('fish', 'fosh')).toBe(2)
    expect(getTheLongestSubString('fort', 'fosh')).toBe(2)
    expect(getTheLongestSubString('blue', 'clues')).toBe(3)
  })

  test('longest subsuquence', () => {
    expect(getTheLongestSubSequence('fish', 'hish')).toBe(3)
    expect(getTheLongestSubSequence('fish', 'vista')).toBe(2)
    expect(getTheLongestSubSequence('fish', 'fosh')).toBe(3)
    expect(getTheLongestSubSequence('fort', 'fosh')).toBe(2)
  })
})