const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i; // Mirroring the Python logic where j starts at the current index
    
    // Swap elements backward until the correct spot is found
    while (j > 0 && nums[j - 1] > nums[j]) {
      // Destructuring assignment to swap elements without a temp variable
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]; 
      j--;
    }
  }
  return nums;
};

const array = [6, 4, 9, 7, 3, 6];
console.log(insertionSort(array)); // [3, 4, 6, 6, 7, 9]


// const insertionSort = (array) => {
  //   for (let i = 1; i < array.length; i++) {
  //     const currValue = array[i];
  //     let j = i - 1;
  
  //     while (j >= 0 && array[j] > currValue) {
  //       array[j + 1] = array[j];
  //       j--;
  //     }
  //     array[j + 1] = currValue;
  //   }
  //   return array;
  // };
  
  // const array = [6, 4, 9, 7, 3, 6];
  // const sortedArray = insertionSort(array);
  // console.log(sortedArray);
  