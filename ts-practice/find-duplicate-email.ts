const emails = [
  "user1@example.com",
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
];

const findDuplicateEmails = (emails: string[]): string | null => {
  const emailMap = new Map<string, boolean>();

  for (const email of emails) {
    if (emailMap.has(email)) {
      return email;
    }
    emailMap.set(email, true);
  }
  return null;
};

console.log(findDuplicateEmails(emails));
