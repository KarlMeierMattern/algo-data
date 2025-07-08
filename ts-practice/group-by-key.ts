// You receive this from an internal API:

const employees = [
  { id: "u1", name: "Alice", department: "Engineering" },
  { id: "u2", name: "Bob", department: "Sales" },
  { id: "u3", name: "Charlie", department: "Engineering" },
  { id: "u4", name: "Dana", department: "Marketing" },
];

//   Write a function to group users by department:

//   {
//     Engineering: [
//       { id: "u1", name: "Alice", department: "Engineering" },
//       { id: "u3", name: "Charlie", department: "Engineering" },
//     ],
//     Sales: [ ... ],
//     Marketing: [ ... ],
//   }

type Employees = {
  id: string;
  name: string;
  department: string;
};

const groupKeys = (
  employees: Array<Employees>
): Record<string, Employees[]> => {
  return employees.reduce(
    (acc: Record<string, Employees[]>, curr: Employees) => {
      const { department } = curr;
      if (!acc[department]) acc[department] = [];
      acc[department].push(curr);
      return acc;
    },
    {}
  );
};

console.log(groupKeys(employees));
