// Write a function that takes a sorted array of numbers and a target, and returns the index of the target if found, or -1 if not.

// binarySearch([1, 3, 5, 7, 9], 5); // 2
// binarySearch([1, 3, 5, 7, 9], 8); // -1

const binarySearch = (arr: number[], k: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9], 5));
console.log(binarySearch([1, 3, 5, 7, 8], 8));
