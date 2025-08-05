// Write a function that returns the first duplicate in an array of numbers.

// firstDuplicate([2, 5, 1, 2, 3, 5]); // 2
// firstDuplicate([1, 2, 3, 4]);       // null
// firstDuplicate([4, 4, 1, 2]);       // 4

const firstDup = (arr: number[]) => {
  const set = new Set<number>();

  for (const num of arr) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return null;
};

console.log(firstDup([2, 5, 1, 2, 3, 5]));
