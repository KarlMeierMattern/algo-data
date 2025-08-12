// Write a function that takes an array of strings and returns the longest string.
// If there are multiple strings with the same max length, return the first one.

// longestString(["cat", "giraffe", "elephant", "ant"]) // "giraffe"

const longestString = (arr: string[]) => {
  let max = 0;
  let longestWord = "";

  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  for (const word of arr) {
    let current = word.length;
    if (current > max) {
      max = current;
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(longestString(["cat", "giraffe", "elephant", "ant"]));

// using reduce
const longestString2 = (arr: string[]): string =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

console.log(longestString2(["cat", "giraffe", "elephant", "ant"]));
