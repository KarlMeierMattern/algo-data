// Given this user list:

const users = [
  { id: "u1", name: "Alice", isActive: true },
  { id: "u2", name: "Bob", isActive: true },
  { id: "u3", name: "Charlie", isActive: false },
  { id: "u4", name: "Dana", isActive: true },
];

// Write a function that returns the first inactive user, or null if all are active.

// { id: "u3", name: "Charlie", isActive: false }

type User = {
  id: string;
  name: string;
  isActive: boolean;
};

const findInactive = (users: Array<User>): User | null => {
  return users.find((user: User) => user.isActive === false) || null;
};

console.log(findInactive(users));
