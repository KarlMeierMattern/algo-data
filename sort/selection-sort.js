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

// Time complexity of O(n²) in all cases (best, worst, and average).
// It selects the smallest element in each pass and swaps it into the correct position.
// It always requires n-1 passes, and each pass makes up to n-1 comparisons.
// This results in (n-1) + (n-2) + … + 1 ≈ O(n²) comparisons, regardless of the input order.

// Space Complexity of O(1) (in-place sorting, no extra memory needed).

// Comparison with Bubble Sort
// Both have O(n²) time complexity, but Selection Sort does fewer swaps (O(n) swaps vs. O(n²) for Bubble Sort).
// Selection Sort is generally faster than Bubble Sort, but still inefficient for large datasets.
