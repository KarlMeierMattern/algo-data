// You’re given two sorted arrays of numbers. Merge them into one sorted array (ascending).

// mergeSorted([1, 3, 5], [2, 4, 6]);
// → [1, 2, 3, 4, 5, 6]

const mergeSort = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = 0;
  const newArr: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) newArr.push(arr1[i++]);
  while (j < arr2.length) newArr.push(arr2[j++]);

  return newArr;
};

console.log(mergeSort([1, 3, 5], [2, 4, 6]));

// Time: O(n + m) (each element is visited once).
// Space: O(n + m) (result array).
