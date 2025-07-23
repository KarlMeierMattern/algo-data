// Given an array of numbers and a target difference k, return true if any two distinct numbers have an absolute difference of k.

// hasPairWithDiff([1, 5, 3, 9], 4) → true  // 5 - 1 or 9 - 5
// hasPairWithDiff([1, 2, 3], 5) → false

// Output: boolean
// Use a Set
// Avoid nested loops (no O(n²))

const fastLookup = (arr: number[], diff: number): boolean => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const remainder = arr[i] - diff;
    if (set.has(remainder)) return true;
    set.add(arr[i]);
  }
  return false;
};

console.log(fastLookup([2, 4, 3, 9], 4));

// You can use a Set to solve problems like:
// - Removing duplicates
// - Checking if a value was seen before
// - Validating uniqueness
