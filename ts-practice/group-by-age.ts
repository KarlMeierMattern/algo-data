// Given an array of people:

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
];

// Write a function that groups people by age into a Record<number, string[]>:

// {
//     25: ["Bob", "David"],
//     30: ["Alice", "Charlie"]
// }

type People = {
  name: string;
  age: number;
};

const groupBy = (people: Array<People>): Record<number, string[]> => {
  return people.reduce((acc: Record<number, string[]>, curr: People) => {
    const { age } = curr;
    if (!acc[age]) acc[age] = [];
    acc[age].push(curr.name);
    return acc;
  }, {});
};

console.log(groupBy(people));
