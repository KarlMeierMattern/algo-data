// Write a TypeScript function that takes this response and returns a deduplicated array of all tags, sorted alphabetically.

const response = {
  data: {
    items: [
      { id: "a1", name: "Alpha", tags: ["tech", "saas"] },
      { id: "b2", name: "Beta", tags: ["finance"] },
      { id: "c3", name: "Gamma", tags: ["tech", "infra", "saas"] },
    ],
  },
};

const getTagsTest = (response: any): Array<string> => {
  const tags = response.data.items.map((item: any) => item.tags).flat();
  return tags
    .filter((tag: any, index: any, array: any) => array.indexOf(tag) === index) // finds the first occurrence of this tag and checks if current position is the first occurrence
    .sort();
};

console.log(getTagsTest(response));

const getTags = (response: any): Array<string> => {
  const tags = response.data.items.map((item: any) => item.tags);
  const flatTags = tags.reduce((acc: any, curr: any) => acc.concat(curr), []);
  const uniqueTags = new Set<string>(flatTags);
  return Array.from(uniqueTags).sort();
};

// console.log(getTags(response));

const numbers = [1, 2, 3, 2, 4];
const filteredNumbers = numbers.filter(
  (item, index, array) => array.indexOf(item) === index,
);
// console.log(filteredNumbers);
