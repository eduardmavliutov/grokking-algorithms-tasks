export const breadthFirstSearch = (graph, start, target) => {
  if (!graph[start] || !graph[target]) {
    return null
  }

  const route = [start]
  const queue = [...graph[start]]
  const checkedNodes = []

  while (queue.length) {
    const currentNode = queue.shift()
    route.push(currentNode)
  
    if (checkedNodes.includes(currentNode)) {
      continue
    } else {
      checkedNodes.push(checkedNodes)
    }

    if (currentNode === target) {
      return route
    } else {
      queue.push(...graph[currentNode])
    }
  }
}
