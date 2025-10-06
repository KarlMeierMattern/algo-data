// Given a sorted array of integers and a target sum, return the indices of the two numbers that add up to that target.

// pairSum([1, 2, 3, 4, 6], 6); // [1, 3] because 2 + 4 = 6
// pairSum([2, 5, 9, 11], 11);  // [0, 2] because 2 + 9 = 11

const pairSum = (arr: Array<number>, k: number): Array<number> => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === k) return [left, right];
    else if (sum < k) left++;
    else right--;
  }
  return [-1, -1];
};

console.log(pairSum([2, 5, 9, 11], 11));
