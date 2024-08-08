import { expect, describe, test } from 'vitest';
import { breadthFirstSearch } from './graphs';

describe('graphs tests', () => {
  const graph = {}
  graph.ryan = ['bob', 'clair', 'alice']
  graph.bob = ['anuj', 'peggy']
  graph.alice = ['peggy']
  graph.clair = ['jonny', 'tom']
  graph.anuj = []
  graph.peggy = []
  graph.tom = []
  graph.jonny = []

  test('breadthFirstSearch returns the shortest way if target node exists in a graph', () => {
    expect(breadthFirstSearch(graph, 'ryan', 'tom')).toEqual(['ryan', 'bob', 'clair','alice', 'anuj', 'peggy', 'jonny', 'tom'])
  })

  test('breadthFirstSearch returns if the target node doesn\'t exist in a graph', () => {
    expect(breadthFirstSearch(graph, 'ryan', 'ben')).toBe(null)
  })

  test('breadthFirstSearch returns if the start node doesn\'t exist in a graph', () => {
    expect(breadthFirstSearch(graph, 'harry', 'tom')).toBe(null)
  })
})