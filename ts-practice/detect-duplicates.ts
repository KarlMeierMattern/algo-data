// Detect Duplicates in an Array

const emails = [
  "user1@example.com",
  "user2@example.com",
  "user1@example.com",
  "user3@example.com",
];

// Write a function that returns true if any duplicate exists, or false otherwise.

// true // because "user1@example.com" appears twice

// using set
const detectDuplicates = (array: string[]): boolean => {
  const seen = new Set<string>();

  for (const item of array) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
};

console.log(detectDuplicates(emails));

// return array.some((item, index) => array.indexOf(item) !== index);

// using map
const detectDupsMap = (array: Array<string>): string | null => {
  const seen = new Map<string, boolean>();

  for (const item of array) {
    if (seen.has(item)) return item;
    seen.set(item, true);
  }
  return null;
};

// console.log(detectDupsMap(emails));
