const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let newArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newArray.push(left[i]);
      i++;
    } else {
      newArray.push(right[j]);
      j++;
    }
  }
  return [...newArray, ...left.slice(i), ...right.slice(j)];
};

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", mergeSort(arr));
