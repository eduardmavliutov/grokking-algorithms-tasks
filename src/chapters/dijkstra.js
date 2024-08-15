/**
 * Based on the passed graph function creates an object with costs,
 * that stores the cost of getting from the start node to each node of the graph,
 * including the target node
 */
export const buildCosts = (graph, start, target) => {
  if (!graph || !graph[start] || !graph[target]) {
    return null
  }

  const costs = {
    ...graph[start],
  }

  return Object.keys(graph).reduce((totalCosts, node) => {
    const shouldAddCost = node !== start && !(node in graph[start]) && !(node in totalCosts)
    if (shouldAddCost) {
      totalCosts[node] = Infinity
    }

    return totalCosts
  }, costs)
}

/**
 * Starting from the start node the function creates an object where 'key' is a node
 * and its 'value' is that node's parent node (if it's known, otherwise - null). 
 */
export const buildParents = (graph, start, target) => {
  if (!graph || !graph[start] || !graph[target]) {
    return null
  }

  const parents = Object.keys(graph[start]).reduce((totalParents, nodeName) => {
    totalParents[nodeName] = start
    return totalParents
  }, {})

  return Object.keys(graph).reduce((totalParents, node) => {
    const shouldAddParent = node !== start && !(node in graph[start]) && !(node in totalParents)
    if (shouldAddParent) {
      totalParents[node] = null
    }

    return totalParents
  }, parents)
}

/**
 * Returns a non-processed node with lowest cost
 */
export const findNodeWithLowestCost = (costs, processed) => {
  let lowestCost = Infinity
  let lowestCostNode = null

  Object.keys(costs).forEach((node) => {
    const cost = costs[node]

    // if cost is lower than the 'lowestCost' and the node hasn't been processed before
    // that's the lowestCostNode we're looking for
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCostNode = node
      lowestCost = cost
    }
  })

  return lowestCostNode
}

/**
 * Creates a path from 
 */
export const buildPath = (parents, start, target) => {
  let currentParent = parents[target]
  const path = [target, currentParent]

  while(currentParent && currentParent !== start) {
    currentParent = parents[currentParent]
    path.push(currentParent)
  }

  return path.toReversed()
}

/**
 * Finds the fastest way (=== the way with the lowest cost) from the 'start' node
 * to the 'target' node in the graph and returns it as an object with 'path' and 'cost' properties,
 * where 'path' is a string array representing the sequence of nodes from the 'start' to the 'target'
 * and 'cost' is the actual cost of getting from the 'start' to the 'target' node
 */
export const findFastestWay = (graph, start, target) => {
  if (!graph || !graph[start] || !graph[target]) {
    return null
  }

  const costs = buildCosts(graph, start, target)
  const parents = buildParents(graph, start, target)
  const processed = []
  let currentLowestNode = findNodeWithLowestCost(costs, processed)

  while (currentLowestNode) {
    const currentLowestNodeCost = costs[currentLowestNode]
    const neighbours = graph[currentLowestNode]

    Object.keys(neighbours).forEach((neighbourNode) => {
      const newCost = currentLowestNodeCost + neighbours[neighbourNode]

      if (newCost < costs[neighbourNode]) {
        costs[neighbourNode] = newCost
        parents[neighbourNode] = currentLowestNode
      }
    })

    processed.push(currentLowestNode)
    currentLowestNode = findNodeWithLowestCost(costs, processed)
  }

  return {
    path: buildPath(parents, start, target),
    cost: costs[target]
  }
}
