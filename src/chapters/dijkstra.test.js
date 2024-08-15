import { describe, expect, test } from 'vitest'
import { buildCosts, buildParents, findNodeWithLowestCost, findFastestWay, buildPath } from './dijkstra'

describe('dijkstra algorithm', () => {
  const graph = {
    book: {
      vinyl: 5,
      poster: 0,
    },
    vinyl: {
      drum: 20,
      guitar: 15,
    },
    poster: {
      guitar: 30,
      drum: 35,
    },
    guitar: {
      piano: 20,
    },
    drum: {
      piano: 10,
    },
    piano: {}
  }

  describe('buildCosts util', () => {
    test('returns proper cost object', () => {
      const expectedCosts = {
        vinyl: 5,
        poster: 0,
        guitar: Infinity,
        drum: Infinity,
        piano: Infinity,
      }
      expect(buildCosts(graph, 'book', 'guitar')).toEqual(expectedCosts)
    })
  
    test('returns null if start doesn\'t exist in graph', () => {
      expect(buildCosts(graph, 'star', 'guitar')).toEqual(null)
    })
  
    test('returns null if target doesn\'t exist in graph', () => {
      expect(buildCosts(graph, 'guitar', 'space')).toEqual(null)
    })
  
    test('returns null if graph has a falsy value', () => {
      expect(buildCosts(undefined, 'poster', 'drum')).toEqual(null)
      expect(buildCosts(null, 'poster', 'drum')).toEqual(null)
    })
  })

  describe('buildParents util', () => {
    test('returns proper cost object', () => {
      const expectedParents = {
        vinyl: 'book',
        poster: 'book',
        guitar: null,
        drum: null,
        piano: null,
      }
      expect(buildParents(graph, 'book', 'guitar')).toEqual(expectedParents)
    })
  
    test('returns null if start doesn\'t exist in graph', () => {
      expect(buildParents(graph, 'star', 'guitar')).toEqual(null)
    })
  
    test('returns null if target doesn\'t exist in graph', () => {
      expect(buildParents(graph, 'guitar', 'space')).toEqual(null)
    })
  
    test('returns null if graph has a falsy value', () => {
      expect(buildParents(undefined, 'poster', 'drum')).toEqual(null)
      expect(buildParents(null, 'poster', 'drum')).toEqual(null)
    })
  })

  describe('findNodeWithLowestCost util', () => {
    test('finds the proper node if the processed array is empty', () => {
      const costs = {
        vinyl: 5,
        poster: 0,
        guitar: Infinity,
        drum: Infinity,
        piano: Infinity,
      }
      const processed = []
      expect(findNodeWithLowestCost(costs, processed)).toBe('poster')
    })

    test('finds the proper lowest cost node if some nodes were processed', () => {
      const costs = {
        vinyl: 5,
        poster: 0,
        guitar: Infinity,
        drum: Infinity,
        piano: Infinity,
      }
      const processed = ['poster']
      expect(findNodeWithLowestCost(costs, processed)).toBe('vinyl')
    })
  })

  describe('buildPath util', () => {
    test('builds path according to passed arguments', () => {
      const parents = {
        vinyl: 'book',
        poster: 'book',
        guitar: 'vinyl',
        drum: 'vinyl',
        piano: 'drum'
      }
      const expectedPath = ['book', 'vinyl', 'drum', 'piano']
      expect(buildPath(parents, 'book', 'piano')).toEqual(expectedPath)
    })
  })

  describe('findFastestWay', () => {
    test('finds the fastest way to the target node', () => {
      const expected = {
        cost: 35,
        path: ['book', 'vinyl', 'drum', 'piano']
      }
      expect(findFastestWay(graph, 'book', 'piano')).toEqual(expected)
    })

    test('finds the fastest way if the target is one of the nearest start\'s nodes', () => {
      const expected = {
        cost: 5,
        path: ['book', 'vinyl']
      }
      expect(findFastestWay(graph, 'book', 'vinyl')).toEqual(expected)
    })

    test('returns null if start doesn\'t exist in the graph', () => {
      expect(findFastestWay(graph, 'star', 'guitar')).toEqual(null)
    })
  
    test('returns null if target doesn\'t exist in the graph', () => {
      expect(findFastestWay(graph, 'guitar', 'space')).toEqual(null)
    })
  })
})