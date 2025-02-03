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
// 	•	mergeSort([64, 25, 12, 22, 11]) splits the array into [64, 25] and [12, 22, 11].
// 	•	mergeSort([64, 25]) splits into [64] and [25], and merge([64], [25]) returns [25, 64].
// 	•	mergeSort([12, 22, 11]) splits into [12] and [22, 11], and mergeSort([22, 11]) further splits into [22] and [11], and merge([22], [11]) returns [11, 22].
// 	•	merge([12], [11, 22]) returns [11, 12, 22].
// 	•	Finally, merge([25, 64], [11, 12, 22]) merges everything into [11, 12, 22, 25, 64].
