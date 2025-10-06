const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 25 },
];

const names = ["john", "jane", "jack"];

const printName = (names: Array<string>) => {
  return names.map((name) => name);
};

console.log(printName(names));
