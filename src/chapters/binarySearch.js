export const getNumberIndexInArray = (arr, num) => {
  let left = 0
  let right = arr.length - 1
  let index = null

  while (left <= right) {
    const center = Math.ceil((left + right) / 2)

    if (arr[center] === num) {
      index = center
      break
    } else if (num < arr[center]) {
      right = center - 1
    } else if (num > arr[center]) {
      left = center + 1
    }
  }

  return index
}