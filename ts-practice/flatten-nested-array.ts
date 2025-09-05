// Write a function that takes an array that may contain nested arrays of numbers and returns a single flat array with all numbers in order.

// flatten([1, [2, [3, 4], 5], 6]);
// → [1, 2, 3, 4, 5, 6]

const flatten = (arr: any[]): any[] => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }
    return acc.concat(curr);
  }, []);
};

console.log(flatten([1, [2, [3, 4], 5], 6]));

// Time: O(n)
// Space: O(n)
// Output: New array, no mutation of original

// In-place solution
const flatten2 = (arr: any[]): any[] => {
  let finalArr: any[] = [];
  let stack: any[] = [...arr];

  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      finalArr.push(item);
    }
  }
  return finalArr;
};

console.log(flatten2([1, [2, [3, 4], 5], 6]));
