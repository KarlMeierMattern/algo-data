// Write a recursive function to count how many times a given character appears in a string.

// countChar("banana", "a") // 3

const countChar = (str: string, target: string): number => {
  if (str.length === 0) return 0;

  const first = str[0] === target ? 1 : 0;
  return first + countChar(str.slice(1), target);
};

console.log(countChar("banana", "a"));
