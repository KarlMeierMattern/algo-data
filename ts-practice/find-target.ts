// Given a sorted array of numbers and a target value, return the indices of the first and last occurrence of the target.
// If not found, return [-1, -1].

// searchRange([5,7,7,8,8,10], 8); // [3, 4]
// searchRange([5,7,7,8,8,10], 6); // [-1, -1]
// searchRange([], 0);             // [-1, -1]

const searchRange = (arr: number[], k: number): [number, number] => {
  const findLeft = () => {
    let left = 0;
    let right = arr.length - 1;
    let pos = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === k) {
        pos = mid; // possible answer
        right = mid - 1; // keep searching left
      } else if (arr[mid] < k) {
        left = mid + 1;
      } else right = mid - 1;
    }

    return pos;
  };

  const findRight = () => {
    let left = 0;
    let right = arr.length - 1;
    let pos = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === k) {
        pos = mid; // possible answer
        left = mid + 1; // keep searching right
      } else if (arr[mid] < k) {
        left = mid + 1;
      } else right = mid - 1;
    }

    return pos;
  };

  return [findLeft(), findRight()];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
