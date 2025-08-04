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
