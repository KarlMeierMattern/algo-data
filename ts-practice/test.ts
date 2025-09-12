// You’re given an array of numbers and a target sum. Return true if any two numbers in the array add up to the target, otherwise return false.

// hasPairWithSum([1, 2, 3, 9], 8);   // false
// hasPairWithSum([1, 2, 4, 4], 8);   // true

// Time: O(n) → one pass, each set.has and set.add is O(1).
// Space: O(n) → in the worst case we store every element in the set.
const hasPairWithSum = (arr: number[], target: number): boolean => {
  const set = new Set<number>();

  for (const num of arr) {
    let remainder = target - num;
    if (set.has(remainder)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

console.log(hasPairWithSum([1, 2, 3, 5], 9));
