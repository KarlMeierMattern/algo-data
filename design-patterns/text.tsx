const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Jim", age: 22 },
  { name: "Jill", age: 23 },
  { name: "Jack", age: 24 },
  { name: "Jill", age: 25 },
  { name: "Jack", age: 26 },
  { name: "Jill", age: 27 },
];

export const App = () => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};
