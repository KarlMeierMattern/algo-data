// Write a function that removes adjacent duplicate characters from a string.
// Repeat the process until no duplicates remain next to each other.

// removeAdjacent("abbaca") ➞ "ca"
// removeAdjacent("azxxzy") ➞ "ay"

// Only adjacent duplicates are removed (like a stack)
// Do not sort the string
// Output is a new string

const removeDuplicates = (str: string): string => {
  const clean: string[] = [];

  for (const char of str) {
    const prev = clean[clean.length - 1];
    if (prev === char) {
      clean.pop();
    } else {
      clean.push(char);
    }
  }
  return clean.join("");
};

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
