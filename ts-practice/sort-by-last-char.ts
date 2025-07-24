// Write a function that takes an array of strings and returns a new array sorted by the last character of each string.

// ["apple", "banana", "cherry"] → ["banana", "apple", "cherry"]
// because: "a", "e", "y"

// Output: string[]
// Use .sort()
// Use a custom comparator
// Time: O(n log n)
// Space: O(n) if copying, O(1) if sorting in-place

const sortLastChar = (arr: string[]): string[] => {
  return arr.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

console.log(sortLastChar(["apple", "banana", "cherry"]));
