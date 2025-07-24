// Write a function that takes an array of numbers and returns the number that appears most frequently.

// [1, 2, 2, 3, 3, 3] → 3
// [4, 4, 1, 2, 2, 4] → 4
// [9, 1, 9, 9, 3] → 9

// Output: number
// No sorting
// Time: O(n)
// Use a Record<number, number> or Map<number, number>

// solution 1
const countOccurrence = (arr: number[]): number => {
  const map: Record<number, number> = {};
  let maxNum = arr[0];
  let maxCount = 0;

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > maxCount) {
      maxCount = map[num];
      maxNum = num;
    }
  }

  return maxNum;
};

console.log(countOccurrence([1, 2, 2, 2, 3, 3, 3, 3]));

// solution 2
const countOccurrence2 = (arr: number[]): number => {
  const map: Record<number, number> = {};

  arr.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
  });

  return Object.keys(map).reduce((max, key) => {
    return map[key] > map[max] ? Number(key) : max;
  }, Number(Object.keys(map)[0]));
};

// console.log(countOccurrence([1, 2, 2, 3, 3, 3, 3]));
