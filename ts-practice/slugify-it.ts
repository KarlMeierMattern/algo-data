// You get a list of blog post titles like this:

const titles = [
  "  Hello World!  ",
  "Why JavaScript > Java",
  "React: The Good Parts",
  "TypeScript & You",
];

// Write a TypeScript function that takes this array and returns slugified versions:
[
  "hello-world",
  "why-javascript-java",
  "react-the-good-parts",
  "typescript-you",
];

// 📌 Rules:
// 	•	Lowercase everything
// 	•	Remove special characters (!, :, >, &, etc.)
// 	•	Replace spaces with -
// 	•	Trim extra whitespace

const slugify = (arr: Array<string>): Array<string> => {
  return arr.map((item: string): string => {
    return item
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "") // Keeps only letters, numbers, and spaces i.e. remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  });
};

console.log(slugify(titles));
