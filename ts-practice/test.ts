const emails = [
  "user1@example.com",
  "user2@example.com",
  "user1@example.com",
  "user3@example.com",
];

console.log(emails.some((item, index) => emails.indexOf(item) !== index));
