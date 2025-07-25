// Write a function that returns true if any two numbers in the array add up to the target, otherwise false.

// [2, 7, 11, 15], target = 9 → true // because 2 + 7 = 9
// [1, 2, 3], target = 6 → false

const twoSum = (array: Array<number>, target: number): boolean => {
  const seen = new Set<number>();

  for (let i = 0; i < array.length; i++) {
    let remainder = target - array[i];
    if (seen.has(remainder)) return true;
    seen.add(array[i]);
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));
