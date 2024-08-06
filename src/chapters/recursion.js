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
