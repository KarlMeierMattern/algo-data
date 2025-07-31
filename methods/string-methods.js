// String Methods

// Here are some of the most important methods for strings in JavaScript that are useful to remember.
// These methods are fundamental for manipulating strings in JavaScript and are commonly used in various programming tasks.

// 1. length
// Returns the length of the string.
const str = "Hello";
console.log(str.length); // Output: 5

// 2. indexOf()
// Returns the index of the first occurrence of a specified value in a string, or -1 if not found.
// Add optional second argument for the index to start the search at
const str = "Hello, world!";
console.log(str.indexOf("world")); // Output: 7

// 3. substring()
// Returns a portion of the string between two specified indices.
const str = "Hello, world!";
console.log(str.substring(0, 5)); // Output: "Hello"

// 4. slice()
// Similar to substring(), but can accept negative indices to count from the end of the string.
const str = "Hello, world!";
console.log(str.slice(-6)); // Output: "world!"

// 5. toUpperCase()
// Converts the entire string to uppercase.
const str = "Hello";
console.log(str.toUpperCase()); // Output: "HELLO"

// 6. toLowerCase()
// Converts the entire string to lowercase.
const str = "Hello";
console.log(str.toLowerCase()); // Output: "hello"

// 7. trim()
// Removes whitespace from both ends of the string.
const str = "   Hello, world!   ";
console.log(str.trim()); // Output: "Hello, world!"

// 8. split()
// Splits a string into an array of substrings based on a specified delimiter.
const str = "Hello, world!";
console.log(str.split(", ")); // Output: ["Hello", "world!"]

// 9. replace()
// Replaces a specified value with another value in a string.
const str = "Hello, world!";
console.log(str.replace("world", "JavaScript")); // Output: "Hello, JavaScript!"

// 10. includes()
// Checks if a string contains a specified substring, returning true or false.
const str = "Hello, world!";
console.log(str.includes("world")); // Output: true

// 11. startsWith()
// Checks if a string starts with a specified substring.
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // Output: true

// 12. endsWith()
// Checks if a string ends with a specified substring.
const str = "Hello, world!";
console.log(str.endsWith("world!")); // Output: true

// 13. join()
// You can split a string on every occurrence of another string with split and join it again with join:
let words = ["Hello", "world!"];
console.log(words.join(", ")); // → Hello, world

// 14. String sorting
const fruits = ["banana", "apple", "orange", "grape"];
fruits.sort(); // ['apple', 'banana', 'grape', 'orange']

// 15. Sort by last char
const sortLastChar = (arr: string[]): string[] => {
  return arr.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

console.log(sortLastChar(["apple", "banana", "cherry"]));

// 16. Append letter to string
const word = "Hello";
word += "!";
console.log(word); // → Hello!

// 17. Remove last letter from string
const word = "Hello";
word = word.slice(0, -1);
console.log(word); // → Hell
