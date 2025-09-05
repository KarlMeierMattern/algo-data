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
// 	•	Each element (including nested ones) is visited once.
// 	•	concat copies arrays each time, so total time is proportional to the total number of elements, n.

// Space: O(n)
// 	•	The output array holds n elements.
// 	•	Recursion stack can go as deep as the deepest nesting, worst-case O(n).

const flatten2 = (arr: any[]): number[] => {
  const result: number[] = [];

  const helper = (arr: number[]) => {
    for (const el of arr) {
      if (Array.isArray(el)) {
        helper(el);
      } else {
        result.push(el);
      }
    }
  };
  helper(arr);
  return result;
};

console.log(flatten2([1, [2, [3, 4], 5], 6]));

// Time: O(n) — each element is visited once.
// Space: O(n) — one output array, recursion stack depth = max nesting depth.
// More efficient than .concat version because no intermediate arrays are created.
