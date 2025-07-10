// Given a list of employees:

const employees = [
  { id: "u1", name: "Alice", department: "Engineering" },
  { id: "u2", name: "Bob", department: "Sales" },
  { id: "u3", name: "Charlie", department: "Engineering" },
  { id: "u4", name: "Dana", department: "Marketing" },
];

// Write a function that returns a deduplicated array of department names in alphabetical order:

// ["Engineering", "Marketing", "Sales"]

type Employee = {
  id: string;
  name: string;
  department: string;
};

const uniqueDept = (array: Array<Employee>): Array<string> => {
  const dept = array.map((item) => item.department);
  const newSet = new Set(dept);
  return Array.from(newSet).sort();
};

console.log(uniqueDept(employees));
