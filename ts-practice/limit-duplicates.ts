// Write a function that returns a new array with elements from the input array, but each number may appear at most twice — further occurrences are discarded.

// limitDuplicates([1, 2, 3, 1, 2, 1, 3, 3, 3])
// → [1, 2, 3, 1, 2, 3]

// Use a Map<number, number> or Record<number, number>
// Time: O(n)
// Space: O(n)
// Output: New array, no mutation of original

const limitDuplicates = (arr: number[]): number[] => {
  const map: Map<number, number> = new Map();
  const result: number[] = [];

  for (const num of arr) {
    let count = map.get(num) || 0;
    if (count < 2) {
      result.push(num);
      map.set(num, count + 1);
    }
  }
  return result;
};

console.log(limitDuplicates([1, 2, 3, 1, 2, 1, 3, 3, 3]));
