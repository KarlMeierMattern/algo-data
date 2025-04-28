// https://neetcode.io/problems/is-palindrome

// Valid Palindrome
// Easy

// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:
// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

// Time complexity: O(n)
// Space complexity: O(n)
const isPalindrome = (string) => {
  const cleanedString = string.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
  return cleanedString === cleanedString.split("").reverse().join("");
};

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("tab a cat"));
console.log(isPalindrome("racecar"));

// Solution 2
// Time complexity: O(n)
// Space complexity: O(1)
const isPalindrome2 = (string) => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !/[a-zA-Z\d]/.test(string[left])) {
      // While we haven't reached the middle of the string AND the current character is NOT alphanumeric, move the left pointer forward."
      left++;
    }
    // Skip non-alphanumeric characters from right
    while (left < right && !/[a-zA-Z\d]/.test(string[right])) {
      right--;
    }

    if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
