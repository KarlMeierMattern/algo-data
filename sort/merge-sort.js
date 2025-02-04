const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; // Base case

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  return [...sortedArray, ...left.slice(i), ...right.slice(j)]; // should one of the arrays still have remaining elements slice returns the rest of the elements concatenated using the spread operator (...).
};

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", mergeSort(arr));

// Summary of Function Calls:
// 	• mergeSort([64, 25, 12, 22, 11]) splits the array into [64, 25] and [12, 22, 11].
// 	• mergeSort([64, 25]) splits into [64] and [25], and merge([64], [25]) returns [25, 64].
// 	• mergeSort([12, 22, 11]) splits into [12] and [22, 11], and mergeSort([22, 11]) further splits into [22] and [11], and merge([22], [11]) returns [11, 22].
// 	• merge([12], [11, 22]) returns [11, 12, 22].
// 	• Finally, merge([25, 64], [11, 12, 22]) merges everything into [11, 12, 22, 25, 64].

// Time Complexity of O(n log n) in all cases
// • The array is recursively divided into two halves (which takes log n divisions, where n is the size of the array).
// • After each division, the merge function is called to combine the subarrays, and merging two halves takes O(n) time (as each element is processed once).
// • Since both dividing and merging occur at each level of recursion, the overall time complexity is O(n \log n).
// "Doing n things, log n times."

// Space Complexity:
// • Space Complexity: O(n)
// Merge Sort requires extra space to store the temporary arrays during the merge process. Specifically:
// • At each recursion level, you need additional space to store the two halves of the array being merged. Since there are O(n) elements in total, the space required is proportional to the size of the input array, resulting in O(n) space complexity.

// These complexities make Merge Sort an efficient sorting algorithm, especially for large datasets, but it requires additional space.
