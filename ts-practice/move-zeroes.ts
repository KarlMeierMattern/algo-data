// Write a function that takes an array of numbers and moves all the 0s to the end, while keeping the order of the non-zero elements the same.

// moveZeroes([0, 1, 0, 3, 12]);
// → [1, 3, 12, 0, 0]

const moveZeros = (arr: number[]): number[] => {
  let left = 0;
  let finalArr: number[] = [];
  let newArr: number[] = [];

  while (left < arr.length) {
    if (arr[left] === 0) {
      newArr.push(arr[left]);
      left++;
    } else {
      finalArr.push(arr[left]);
      left++;
    }
  }
  const concatArr = finalArr.concat(newArr);
  return concatArr;
};

console.log(moveZeros([0, 1, 0, 3, 12]));

// Time: O(n)
// Single while loop → O(n)
// .concat() → O(n)
// Total → O(n)
// Space: O(n)
// finalArr could be size n
// newArr could be size n
// Combined extra space → O(n)

// In-place solution
const moveZeros2 = (arr: number[]): number[] => {
  let insertPos = 0;

  // Move non-zeros forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  // Fill the rest with zeros
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
};

console.log(moveZeros2([0, 1, 0, 3, 12]));

// Time: O(n)
// Single for loop → O(n)
// while loop → O(n)
// Total → O(n)
// Space: O(1)
// insertPos is O(1)
