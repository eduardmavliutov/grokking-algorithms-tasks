export const breadthFirstSearch = (graph, start, target) => {
  if (!graph || !graph[start] || !graph[target]) {
    return null
  }

  const checkedNodes = [start]
  const queue = [...graph[start]]

  while (queue.length) {
    const currentNode = queue.shift()

    if (checkedNodes.includes(currentNode)) {
      continue
    } else {
      checkedNodes.push(currentNode)
    }

    if (currentNode === target) {
      return checkedNodes
    } else {
      queue.push(...graph[currentNode])
    }
  }
}
