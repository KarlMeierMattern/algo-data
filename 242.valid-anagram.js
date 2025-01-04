// https://leetcode.com/problems/valid-anagram/description/

// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Option 1
const validAnagram = (s, t) => {
  // Step 1: Check if lengths are equal
  if (s.length !== t.length) {
    return false;
  }

  // Step 2: Create frequency maps for both strings
  const countS = {};
  const countT = {};

  for (let char of s) {
    countS[char] = (countS[char] || 0) + 1;
  }

  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }

  // Step 3: Compare the frequency maps
  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
};

// Option 2

const validAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// Test cases
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("aab", "abb")); // false
console.log(validAnagram("abc", "cba")); // true
