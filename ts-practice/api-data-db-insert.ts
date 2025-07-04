// You get this API response:

// const response = {
//   data: {
//     users: [
//       {
//         uuid: "u1",
//         fullName: "Alice Smith",
//         email: "alice@example.com",
//         meta: { verified: true, lastLogin: "2025-05-20T12:34:00Z" },
//       },
//       {
//         uuid: "u2",
//         fullName: "Bob Jones",
//         email: "bob@example.com",
//         meta: { verified: false, lastLogin: "2025-06-10T07:12:00Z" },
//       },
//     ],
//   },
// };

// Write a TypeScript function that transforms this into an array of user objects for DB insertion like:

// [
//   {
//     id: "u1",
//     name: "Alice Smith",
//     email: "alice@example.com",
//     isVerified: true,
//   },
// ];

type User = {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
};

const dbData = (response: any): Array<User> => {
  const dbData: Array<User> = [];
  const items = response.data.users;
  for (const item of items) {
    const cleanResponse: User = {
      id: item.uuid,
      name: item.fullName,
      email: item.email,
      isVerified: item.meta.verified,
    };
    dbData.push(cleanResponse);
  }
  return dbData;
};

// console.log(dbData(response));

const dbDataMap = (response: any): Array<User> => {
  const data = response.data.users.map(
    (user: any): User => ({
      id: user.uuid,
      name: user.fullName,
      email: user.email,
      isVerified: user.meta.verified,
    })
  );
  return data;
};

console.log(dbDataMap(response));
