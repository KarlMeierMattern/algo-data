// Sorting function definitions
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
      }
    }
  }
  return array;
};

const array = [6, 4, 9, 7, 3, 6];
const sortedArray = bubbleSort(array); // Call the function and store the result
console.log(sortedArray); // Log the sorted array to the terminal