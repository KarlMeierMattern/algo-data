// Map reduce
const nums = [1, 2, 3, 4, 5];
// Using map to square each number, then reduce to sum them
const result = nums
  .map((num) => num * num) // Squares each number
  .reduce((acc, num) => acc + num, 0); // Sums all the squared numbers
console.log(result); // Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2)

// 1. Flattening an Array
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// 2. Counting Occurrences
const fruits = ["apple", "banana", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // Output: { apple: 2, banana: 2, orange: 1 }

// 3. Grouping Items
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 25 },
];
const groupedByAge = people.reduce((acc, person) => {
  const { age } = person;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});
console.log(groupedByAge);
// Output: { '25': [ { name: 'John', age: 25 }, { name: 'Jack', age: 25 } ], '30': [ { name: 'Jane', age: 30 } ] }

//   4. Creating an Object from an Array
const keys = ["a", "b", "c"];
const values = [1, 2, 3];
const object = keys.reduce((acc, key, index) => {
  acc[key] = values[index];
  return acc;
}, {});
console.log(object); // Output: { a: 1, b: 2, c: 3 }

// 5. Finding the Maximum/Minimum Value
const numbers = [10, 20, 4, 100, 50];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); // Output: 100

// 6. Running Total / Cumulative Sum
const number = [1, 2, 3, 4, 5];
const cumulativeSum = number.reduce((acc, num) => {
  acc.push((acc[acc.length - 1] || 0) + num);
  return acc;
}, []);
console.log(cumulativeSum); // Output: [1, 3, 6, 10, 15]
