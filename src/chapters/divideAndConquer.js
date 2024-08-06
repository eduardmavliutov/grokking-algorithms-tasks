export const sumArrayRecursively = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] + sumArrayRecursively(arr.slice(1))
}