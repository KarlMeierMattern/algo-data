// Write a function that takes two arrays of numbers and returns true if both arrays contain the same elements with the same frequencies — regardless of order.

// sameFrequency([1, 2, 3], [3, 2, 1]) → true
// sameFrequency([1, 2, 2], [2, 1, 1]) → false
// sameFrequency([4, 4, 5], [5, 4, 4]) → true

// Output: boolean
// Time: O(n)
// Space: O(n)
// Use Record<number, number> or Map<number, number>

// solution 1 using normal object / hash map
const sameFrequency = (arr1: number[], arr2: number[]): boolean => {
  const map1: Record<number, number> = {};
  const map2: Record<number, number> = {};

  if (arr1.length !== arr2.length) return false;

  // has map 1
  for (const num of arr1) {
    map1[num] = (map1[num] || 0) + 1;
  }

  // hash map 2
  for (const num of arr2) {
    map2[num] = (map2[num] || 0) + 1;
  }

  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

console.log(sameFrequency([1, 2, 3], [3, 2, 1]));

// solution 2 using Map
const sameFrequency = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();

  for (const num of arr1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    map2.set(num, (map2.get(num) || 0) + 1);
  }

  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};
