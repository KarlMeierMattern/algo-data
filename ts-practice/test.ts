const sameFrequency = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();

  for (const num of arr1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    map2.set(num, (map2.get(num) || 0) + 1);
  }

  for (const key in map1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

console.log(sameFrequency([2, 4, 6]));
