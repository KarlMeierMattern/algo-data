const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `Found at index ${i}`;
    }
  }
  return "Sorry, nothing found";
};

const myArray = [50, 20, 30, 40, 60];
const target = 300;

console.log(linearSearch(myArray, target));
