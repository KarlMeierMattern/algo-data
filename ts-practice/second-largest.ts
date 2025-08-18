// Write a function that takes an array of numbers and returns the second largest number.
// If there are fewer than 2 unique numbers, return null.

// secondLargest([5, 1, 5, 3]) // 3
// secondLargest([10]) // null

// O(n) space and time complexity
const secondLargest = (arr: number[]): number | null => {
  if (arr.length < 2) return null;

  let largest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  const newArr = arr.filter((num) => num !== largest); // O(n) space creates new array

  let secondLargest = -Infinity;
  for (const num of newArr) {
    if (num > secondLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};

console.log(secondLargest([5, 1, 5, 3]));

// O(1) space and O(n) time complexity
const secondLargest2 = (arr: number[]): number | null => {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) { // account for duplicates
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
};

console.log(secondLargest2([5, 1, 5, 3]));
