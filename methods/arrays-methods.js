// Array Methods

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
