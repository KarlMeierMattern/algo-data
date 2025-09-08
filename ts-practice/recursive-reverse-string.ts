// Write a recursive function that takes a string and returns it reversed.
// You’re not allowed to use .reverse() or convert the string into an array and reverse it.

// Example:
// reverseString("hello") // "olleh"
// reverseString("abc")   // "cba"

const reverseString = (str: string): string => {
  if (str.length <= 1) return str;

  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

console.log(reverseString("hello"));

// without recursion
const reverseString2 = (str: string): string => {
  let splitStr = str.split("");
  let left = 0;
  let right = splitStr.length - 1;

  while (left < right) {
    [splitStr[left], splitStr[right]] = [splitStr[right], splitStr[left]];
    left++;
    right--;
  }

  return splitStr.join("");
};

console.log(reverseString2("hello"));
