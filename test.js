const fruits = ["apple", "banana", "orange", "banana", "apple"];

const groupFruits = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(groupFruits);
