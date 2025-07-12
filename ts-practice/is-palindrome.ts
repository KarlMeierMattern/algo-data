// Using two pointers, write a function that checks if a string is a palindrome without reversing the string.

// "island" → false
// "A man, a plan, a canal: Panama" → true
// "raceCAR" → true

const palindromeCheck = (string: string): boolean => {
  const cleaned = string.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(palindromeCheck("A man, a plan, a canal: Panama"));
