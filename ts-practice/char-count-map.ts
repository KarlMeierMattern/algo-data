// Write a function that returns how many times each character appears in a string.

// "hello world" →
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   " ": 1,
//   w: 1,
//   r: 1,
//   d: 1
// }

// Output type: Record<string, number>
// Lowercase everything
// Ignore special characters — count all letters and spaces

// solution 1
const charCountMap = (str: string): Record<string, number> => {
  const cleanedStr = str.replace(/[^a-z]/gi, "");
  const splitStr = cleanedStr.toLocaleLowerCase().split("");
  const newMap = new Map<string, number>();

  splitStr.forEach((item) => {
    newMap.set(item, (newMap.get(item) || 0) + 1);
  });
  return Object.fromEntries(newMap.entries());
};

// console.log(charCountMap("Hello world"));

// solution 2
const charCountMap2 = (str: string): Record<string, number> => {
  const cleanedStr = str.replace(/[^a-z]/gi, "");
  const splitStr = cleanedStr.toLocaleLowerCase().split("");
  const newObj: Record<string, number> = {};

  splitStr.forEach((item) => {
    newObj[item] = (newObj[item] || 0) + 1;
  });
  return newObj;
};

console.log(charCountMap2("Hello world"));
