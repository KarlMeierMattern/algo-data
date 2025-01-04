// 3. Longest Substring Without Repeating Characters (Medium)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const s = "pwwkew";

// Solution 1
const longestSubstring = (string) => {
  let result = [];
  let maxLength = 0; // To keep track of the maximum length

  for (let str of string) {
    if (result.includes(str)) {
      // Remove characters from the start until the repeating character is removed
      while (result.includes(str)) {
        result.shift();
      }
    }
    result.push(str);
    maxLength = Math.max(maxLength, result.length); // Update maxLength
  }

  return maxLength; // Return the length of the longest substring
};

console.log(longestSubstring(s));

// Solution 2
const longestSubstring2 = (string) => {
  let charIndexMap = new Map(); // To store the last index of each character
  let maxLength = 0;
  let start = 0; // Start index of the current substring

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1; // Move start to the right of the last occurrence
    }
    charIndexMap.set(char, i); // Update the last index of the character
    maxLength = Math.max(maxLength, i - start + 1); // Update maxLength
  }
  return maxLength; // Return the length of the longest substring
};