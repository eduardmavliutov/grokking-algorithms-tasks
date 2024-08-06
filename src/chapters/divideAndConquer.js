export const sumArrayRecursively = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] + sumArrayRecursively(arr.slice(1))
}

export const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  } else if (arr.length === 2) {
    return arr[0] <= arr[1] ? arr : [arr[1], arr[0]]
  }

  const pivot = arr[0]
  const less = []
  const greater = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }  
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}