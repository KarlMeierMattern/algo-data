// A mock function to simulate an asynchronous request
const mockRequest = async (task, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${task} completed after ${delay}ms`);
      resolve(`Result of task ${task}`); // When resolve is called with a value the Promise is fulfilled. The result of the Promise is the value passed to resolve.
    }, delay);
  });
};

// Sequentially process an array of tasks
const processQueueSequentially = async (tasks) => {
  const results = [];
  for (const task of tasks) {
    const result = await mockRequest(task.id, task.delay);
    results.push(result);
  }
  return results;
};

// Example usage
const tasks = [
  { id: 1, delay: 1000 },
  { id: 2, delay: 500 },
  { id: 3, delay: 800 },
];

// processQueueSequentially(tasks).then((results) => {
//   console.log("All tasks completed:", results);
// });

try {
  const taskResponse = await processQueueSequentially(tasks);
  console.log("All tasks completed:", taskResponse);
} catch (error) {
  console.log(`The following error occurred: ${error}`);
}
