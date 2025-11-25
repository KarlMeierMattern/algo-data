// Challenge: Group API Results by Key
// Write a function groupByRole(users) that returns an object where each key is a role and the value is an array of user IDs.

const users = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" },
  { id: 4, role: "guest" },
];

// Expected output:

// {
//   admin: [1, 3],
//   user: [2],
//   guest: [4]
// }

type User = {
  id: number;
  role: string;
};

const groupByRole = (users: Array<User>): Record<string, number[]> => {
  return users.reduce((acc: Record<string, number[]>, curr: User) => {
    const { role } = curr;
    if (!acc[role]) acc[role] = [];
    acc[role].push(curr.id);
    return acc;
  }, {});
};

console.log(groupByRole(users));

const groupByRoleManual = (users: Array<User>): Record<string, number[]> => {
  const store: Record<string, number[]> = {};

  for (const user of users) {
    const { id, role } = user;
    if (!store[role]) store[role] = [];
    store[role].push(user.id);
  }

  return store;
};

console.log(groupByRoleManual(users));
