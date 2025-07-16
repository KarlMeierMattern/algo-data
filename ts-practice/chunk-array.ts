// Given an array of items and a chunk size, return an array of chunks.

const data = ["a", "b", "c", "d", "e"];
const size = 2;

// Write a function that splits any array into equally sized chunks. The final chunk may be smaller.
// [["a", "b"], ["c", "d"], ["e"]]

// solution 1
const chunkArray = (array: Array<string>, size: number): Array<any> => {
  const outerArray: Array<any> = [];
  let innerArray: Array<any> = [];

  for (let i = 0; i < array.length; i++) {
    innerArray.push(array[i]);

    if (innerArray.length === 2) {
      outerArray.push(innerArray);
      innerArray = [];
    }
  }

  if (innerArray.length > 0) {
    outerArray.push(innerArray);
  }

  return outerArray;
};

// console.log(chunkArray(data, size));

// solution 2
const chunkArray2 = (array: string[], size: number): string[][] => {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size)); // array.slice returns a new array
  }
  return result;
};

// console.log(chunkArray2(data, size));

// You’ll use this for:
// Paginating results
// Uploading files in batches
// Rendering rows or grids
