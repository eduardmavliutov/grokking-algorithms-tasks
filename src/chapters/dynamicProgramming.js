export const visitPlaces = (places, hours) => {
  const tableRows = places.length + 1
  const tableColumns = hours + 1
  const table = new Array(tableRows)
    .fill(1)
    .map((_) => new Array(tableColumns).fill(1))

  for (let row = 0; row < tableRows; row++) {
    table[row][0] = 0
  }

  for (let col = 0; col < tableColumns; col++) {
    table[0][col] = 0
  }

  for (let row = 1; row < tableRows; row++) {
    const currentPlace = places[row - 1]
    for (let col = 1; col < tableColumns; col++) {
      const availableHours = col
      // if we have time to visit the place
      if (currentPlace.timeToVisit <= availableHours) {
        const hoursLeft = availableHours - currentPlace.timeToVisit

        // Compare the next two and pick the maximum one for the current cell
        const pointsIncludingPlace = currentPlace.points + table[row - 1][hoursLeft]
        const pointsNotIncludingPlace = table[row - 1][col]

        table[row][col] = Math.max(pointsIncludingPlace, pointsNotIncludingPlace)
      } else {
        // if we don't have enough time
        table[row][col] = table[row - 1][col]
      }
    }
  }

  return table[tableRows - 1][tableColumns - 1]
}

export const fillKnapsack = (items, knapsack) => {
  // Since it's 0/1 knapsack problem,
  // we can only include an item 1 time,
  // we can't include a fraction of an item
  // we can't include it multiple times

  // 1) Create a table - a 2-dimensional array of
  // items.length + 1 rows and
  // knapsack + 1 columns

  // a row number (i) represents the set of all the items from rows 1 - i

  // a column number j represents the weight capacity
  // of our knapsack. Therefore, the values in column 5,
  // for example, assumes that our knapsack can hold 5 weight units

  // Thus, an entry in row i, column j represents
  // the maximum value that can be obtained with items 1,2,3..., i
  // in a knapsack that can hold j weight units

  const tableRows = items.length + 1
  const tableColumns = knapsack + 1
  const table = new Array(tableRows)
    .fill(1)
    .map((_) => new Array(tableColumns).fill(1))

  // 2) Fill base cases, that the solution is trivial for
  // Eg, at row 0, when we have no items to pick from,
  // the max value that can be stored in any knapsack must be 0.
  // Similarly, at column 0 for a knapsack, that can hold
  // 0 weight units, the maximum value that can be stored
  // in is 0

  for (let col = 0; col < tableColumns; col++) {
    table[0][col] = 0
  }

  for (let row = 0; row < tableRows; row++) {
    table[row][0] = 0
  }

  // 3) Fill the table
  // At row i and column j we are tackling a sub-problem
  // consisting of items 1,2,3,...,i with a knapsack of j capacity.
  // There are 2 options: we can either include item i or not.
  // Therefore, we need to compare the maximum value that we can obtain
  // with and without item i

  // The maximum value that we can obtain without item i
  // can be found at row [i - 1], column [j].
  // The reason is: whatever maximum value we can obtain with items
  // 1,2,3...,i must be the same maximum value we can obtain
  // with items 1,2,3...,i - 1, if we choose not to include item i

  // To calculate the maximum value that we can obtain with
  // item i, we first need to compare the weight of item i
  // with knapsack's weight capacity.
  // IF ITEM i WEIGHTS MORE THAT WHAT THE KNAPSACK CAN HOLD,
  // WE CAN'T INCLUDE IT, and it doesn't make sense to perform
  // the calculation.
  // In that case the solution to this problem is simply the maximum value
  // that we can obtain without item i => the value in the row above at the same column
  // row [i - 1] column [j]

  // However, suppose that item [i] weights less than the knapsack's capacity, 
  // so we have an option to include it, if it potentially
  // increases the maximum obtainable value. And so the maximum
  // obtainable value including item i 
  // = the value of item i itself + the maximum value that can be obtained
  // with the remaining capacity of the knapsack,
  // because we obviously want to make the full use of the 
  // capacity of our knapsack and not let any remaining capacity go to waste.

  // Therefore, at row [i] and column [j] (which represents
  // the maximum value we can obtain there),
  // we would pick 
  // either the maximum value that we can obtain without item i
  // or the maximum value that we can obtain with item i,
  // whichever is larger, means the maximum from two options

  for (let row = 1; row < tableRows; row++) {
    for (let col = 1; col < tableColumns; col++) {
      const currentKnapsackCapacity = col
      const currentItemWeight = items[row - 1].weight
      
      if (currentItemWeight > currentKnapsackCapacity) {
        // in this case we take the solution without the current item
        table[row][col] = table[row - 1][col]
      } else {
        // If the current knapsack has a required capacity, then we consider taking the item.
        // But before doing it we need to answer the question:
        // Will we gain a value by putting the current item into the knapsack
        // or it's better to go without it (means the previous solution is better) ?

        // In order to do that we need to compare 
        // - the value we got for the same knapsack without the current item [row - 1][col]
        // - the value we will get for the knapsack with the current item + value for the remaining weight

        // 'remainingWeight' variable is going to be used as a column index
        // to get the optimal value for the knapsack with [remainingWeight]-capacity 
        const remainingWeight = currentKnapsackCapacity - currentItemWeight
        const valueIncludingItem = items[row - 1].price + table[row - 1][remainingWeight]
        const valueNotIncludingItem = table[row - 1][col]
  
        table[row][col] = Math.max(valueIncludingItem, valueNotIncludingItem)
      }
    }
  }

  // Once the table is populated, the final solution can be found
  // at the last row (that means all items were processed) 
  // and at the last column (target knapsack capacity)

  return table[tableRows - 1][tableColumns - 1]
}

export const getTheLongestSubString = (strA, strB) => {
  let count = 0
  let currentMax = 0
  const table = []

  for (let i = 0; i < strA.length; i++) {
    table[i] = []
    for (let j = 0; j < strB.length; j++) {
      if (i === j) {
        if (strA[i] === strB[j]) {
          count++
          currentMax = Math.max(count, currentMax)
        } else {
          count = 0
        }
        table[i][j] = count
      } else {
        table[i][j] = 0
      }
    }
  }

  return currentMax
}

export const getTheLongestSubSequence = (strA, strB) => {
  let count = 0

  for (let i = 0; i < strA.length, i < strB.length; i++) {
    if (strA[i] === strB[i]) {
      count++
    }
  }

  return count
}
