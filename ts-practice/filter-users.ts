// You get a user list like this:

const users = [
  { id: "u1", role: "admin", isActive: true },
  { id: "u2", role: "user", isActive: true },
  { id: "u3", role: "admin", isActive: false },
  { id: "u4", role: "admin", isActive: true },
];

// Write a function that returns only users who are both:
// 	•	role === "admin"
// 	•	isActive === true

// [
//   { id: "u1", role: "admin", isActive: true },
//   { id: "u4", role: "admin", isActive: true },
// ];

type User = {
  id: string;
  role: string;
  isActive: boolean;
};

const filterUsers = (users: Array<User>): Array<User> => {
  return users.filter((user) => user.role === "admin" && user.isActive);
};

console.log(filterUsers(users));

// This conditional .filter() is a daily-driver pattern for:
// 	•	Auth roles & permissions
// 	•	Feature toggles
// 	•	UI visibility logic
// 	•	Filtering data before DB insert or response
