// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).

// isPalindrome("racecar"); // true
// isPalindrome("level");   // true
// isPalindrome("hello");   // false

// Ignore case ("RaceCar" → true).
// Ignore non-alphabetic characters if you want an extra challenge (e.g. "A man, a plan, a canal: Panama" → true).
// Use recursion — don’t just reverse the string.

// Recursive version
const isPalindromeRecursive = (str: string): boolean => {
  str = str.replace("/[^a-z]/gi", "").toLocaleLowerCase();

  if (str.length <= 1) return true;

  const first = str[0];
  const last = str[str.length - 1];

  return first === last && isPalindromeRecursive(str.slice(1, str.length - 1));
};

console.log(isPalindromeRecursive("racecar"));

// Two-pointer version
const isPalindrome = (str: string): boolean => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("racecar"));
