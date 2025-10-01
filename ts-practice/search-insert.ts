// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be inserted in order.

// searchInsert([1,3,5,6], 5); // 2
// searchInsert([1,3,5,6], 2); // 1
// searchInsert([1,3,5,6], 7); // 4
// searchInsert([1,3,5,6], 0); // 0

const searchInsert = (arr: number[], k: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
