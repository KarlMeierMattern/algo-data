const newMap = new Map();
const newArr = [1, 2, 3, 2];
for (let i = 0; i < newArr.length; i++) {
  newMap.set(i, newArr[i]);
}

// console.log(newMap);

const twoSum = (array: number[], target: number): number[] => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    let remainder = target - array[i];

    if (map.has(remainder)) {
      return [map.get(remainder), i];
    }
    map.set(array[i], i);
  }
  return [];
};

console.log(twoSum([2, 5, 7, 8], 9));
