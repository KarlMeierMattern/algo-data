const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap
  }
  return array;
};

const array = [6, 4, 9, 7, 3, 6];
const sortedArray = selectionSort(array); // Call the function and store the result
console.log(sortedArray); // Log the sorted array to the terminal

// O(n^2) complexity
