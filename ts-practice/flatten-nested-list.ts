// Flatten a Nested List

const nested = [1, [2, [3, 4]], 5];

// Write a function to flatten this array into a single-level array:
// [1, 2, 3, 4, 5]

const flattenNested = (array: any[]): number[] => {
  return array.reduce((acc: number[], curr: any) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenNested(curr));
    }
    return acc.concat(curr);
  }, []);
};

console.log(flattenNested(nested));
