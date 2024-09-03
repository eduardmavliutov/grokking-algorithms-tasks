export const factorial = (num) => {
  if (num === 1) {
    return 1
  }

  return num * factorial(num - 1)
}

export const raiseToPower = (num, power) => {
  if (power === 0) {
    return 1
  }

  return num * raiseToPower(num, power - 1)
}

export const getFibonachiNumber = (num) => {
  if (num === 0 || num === 1) {
    return 1
  }

  return getFibonachiNumber(num - 1) + getFibonachiNumber(num - 2)
}

export const getFibonachiNumberWithMemo = (num, previousNumbers = [1, 1]) => {
  const fibonachiNumbers = [...previousNumbers]
  if (!fibonachiNumbers[num]) {
    fibonachiNumbers[num] = getFibonachiNumberWithMemo(num - 1, fibonachiNumbers) + getFibonachiNumberWithMemo(num - 2, fibonachiNumbers)
  }

  return fibonachiNumbers[num]
}