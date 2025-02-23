// Array Methods

// Arrays are just a kind of object specialised for storing sequences of things.
// If you evaluate typeof [], it produces "object".
// You can visualise arrays as long, flat octopuses with all their tentacles in a neat row, labeled with numbers.

// Here are some of the most important methods for arrays in JavaScript that are useful to remember.
// These methods are fundamental for manipulating arrays in JavaScript and are commonly used in various programming tasks.

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4], returns 4

// 2. pop(): Removes the last element from an array and returns that element.
let lastElement = arr.pop(); // lastElement is 4, arr is now [1, 2, 3]

// 3. shift(): Removes the first element from an array and returns that element.
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]

// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0); // arr is now [0, 2, 3], returns 3

// 5. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
let doubled = arr.map((x) => x * 2); // doubled is [0, 4, 6]

// 6. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let evens = arr.filter((x) => x % 2 === 0); // evens is [0, 2]

// 7. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr.reduce((acc, curr) => acc + curr, 0); // sum is 5

// 8. forEach(): Executes a provided function once for each array element.
arr.forEach((x) => console.log(x)); // logs each element in arr

// 9. find(): Returns the value of the first element in the array that satisfies the provided testing function.
let found = arr.find((x) => x > 1); // found is 2

// 10. includes(): Determines whether an array includes a certain value among its entries, returning true or false.
let hasTwo = arr.includes(2); // hasTwo is true

// 11. slice(): Returns a shallow copy of a portion of an array or string into a new array or string.
let slicedArr = arr.slice(0, 2); // slicedArr is [1, 2]

// 12. indexOf method searches through the array and returns the index at which the requested value was found—or -1 if it wasn’t found.
console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1

// 13. To search from the end instead of the start, there’s a similar method called lastIndexOf.
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3

// 14. The concat method can be used to append arrays together to create a new array, similar to what the + operator does for strings.
array = ["a", "b", "c", "d", "e"];
array.slice(0, index).concat(array.slice(index + 1)); // → ["a", "b", "d", "e"]

// 15. You can use three-dot notation (rest parameter) to call a function with an array of arguments.
// This “spreads” out the array into the function call, passing its elements as separate arguments.
let numbers = [5, 1, 7];
console.log(Math.max(9, ...numbers, 2)); // → 7

// 16. Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); // → ["will", "never", "fully", "understand"]
