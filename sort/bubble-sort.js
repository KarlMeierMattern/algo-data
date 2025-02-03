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

// Time complexity of O(n²) in the worst and average cases.
// It repeatedly compares and swaps adjacent elements if they are in the wrong order.
// In the worst case (when the list is in reverse order), it requires n-1 passes, each making up to n-1 comparisons.
// This results in (n-1) * (n-1) ≈ O(n²) comparisons and swaps.

// Best Case (Already Sorted)
// If the list is already sorted, Bubble Sort can complete in O(n) with an optimized version that stops early when no swaps occur.

// Space complexity of O(1) (constant space).
// It sorts the array in place, meaning it does not use extra memory proportional to the input size.
// Only a few auxiliary variables (like a swap flag or loop counters) are used, which take constant space.
