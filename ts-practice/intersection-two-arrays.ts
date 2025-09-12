// Write a function that takes two arrays of numbers and returns an array of their intersection — values that appear in both arrays, no duplicates.

// intersection([1, 2, 2, 1], [2, 2]) → [2]
// intersection([4, 9, 5], [9, 4, 9, 8, 4]) → [4, 9]

const intersectionSet = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const newArr: number[] = [];
  for (const num of set1) {
    if (set2.has(num)) newArr.push(num); // O(1) time for hash tables
  }

  return newArr;
};

console.log(intersectionSet([1, 2, 2, 1], [2, 2]));

// Outer loop over arr1 → O(n)
// .includes() on arr2 for each element → O(m)
// Together → O(n × m) in the worst case
// Space → O(k) where k is the size of unique intersections
const twoArrays = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set<number>();

  for (const num of arr1) {
    if (arr2.includes(num)) {
      // O(m) time complexity
      set.add(num);
    }
  }
  return Array.from(set);
};

console.log(twoArrays([1, 2, 2, 3], [2, 2, 4]));

// Optimised solution
// Build the Set from arr2 is O(m) time and space complexity.
// Outer loop over arr1 → O(n)
// O(1) time complexity
// Total time complexity is O(n+m)
// O(m + k) space for the two sets where m is the size of arr2 and k is the size of unique intersections
const twoArrays = (arr1: number[], arr2: number[]): number[] => {
  const set2 = new Set(arr2);
  const result = new Set<number>();

  for (const num of arr1) {
    if (set2.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};
