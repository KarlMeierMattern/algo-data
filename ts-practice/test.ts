const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
];

// Group by age, but instead of returning names, return the full person objects:

// {
//   25: [
//     { name: "Bob", age: 25 },
//     { name: "David", age: 25 },
//   ],
//   30: [
//     { name: "Alice", age: 30 },
//     { name: "Charlie", age: 30 },
//   ]
// }

const groupAge = (
  people: { name: string; age: number }[]
): Record<number, { name: string; age: number }[]> => {
  return people.reduce(
    (
      acc: Record<number, { name: string; age: number }[]>,
      curr: { name: string; age: number }
    ) => {
      const { age } = curr;
      if (!acc[age]) acc[age] = [];
      acc[age].push(curr);
      return acc;
    },
    {}
  );
};
