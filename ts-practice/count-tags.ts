// You receive tag data from multiple articles:
const articles = [
  { id: "a1", tags: ["tech", "ai"] },
  { id: "a2", tags: ["finance", "ai", "tech"] },
  { id: "a3", tags: ["health", "ai"] },
];

// Write a function that returns an object counting how often each tag appears:

//   {
//     tech: 2,
//     ai: 3,
//     finance: 1,
//     health: 1
//   }

type Tags = {
  id: string;
  tags: Array<string>;
};

const countTags = (articles: Array<Tags>): Record<string, number> => {
  return articles.reduce((acc: Record<string, number>, curr: Tags) => {
    curr.tags.forEach((tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
};

console.log(countTags(articles));
