// ListNode {
//     val: 7,
//     next: ListNode { val: 0, next: ListNode { val: 8, next: [ListNode] } }
//   }

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list.

const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], next: list };
  }
  return list;
};

const testArr = [1, 2, 4];
const list = arrayToList(testArr);
console.log(list);

const listToArray = (list) => {
  const arr = [];
  for (let node = list; node !== null; node = node.next) {
    arr.push(node.value);
  }
  return arr;
};

const testList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};
const newArr = listToArray(testList);
console.log(newArr);
// const testArr2 = [1, 2, 3];
// console.log(arrayToList(testArr));
