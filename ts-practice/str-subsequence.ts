// Write a function that returns true if target is a subsequence of source.

// isSubsequence("abc", "ahbgdc") // → true
// isSubsequence("axc", "ahbgdc") // → false

// solution 1 (does not consider order)
const subsequence = (target: string, source: string): boolean => {
  let newStr = "";
  const sourceArr = source.split("");

  for (const letter of sourceArr) {
    if (target.includes(letter)) newStr += letter;
  }

  return target === newStr;
};

// console.log(subsequence("abc", "ahbgjc"));

// solution 2 (considers order)
const isSubsequence = (target: string, source: string): boolean => {
  let i = 0;

  for (let j = 0; j < source.length; j++) {
    if (source[j] === target[i]) {
      i++;
    }
    if (i === target.length) return true;
  }

  return false;
};

console.log(isSubsequence("abc", "ahbcgj"));
