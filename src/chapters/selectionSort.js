export const selectionSort = (arr) => {
  const sortedArr = arr.slice()
  
  for (let i = 0; i < sortedArr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j
      }
    }

    const temp = sortedArr[i]
    sortedArr[i] = sortedArr[minIndex]
    sortedArr[minIndex] = temp
  }

  return sortedArr
}
