// Task
// Your task is to write a function which will calculate the total amount of all possible ways that the frog can go from top to the bottom.

// Example
// For staircase with steps=3 and maxJumpLength=3 a frog can jump steps like:
// 1-1-1 or 1-2 or 2-1 or 3. Which gives 4 possible jump ways.
// And for staircase with steps=4 and maxJumpLength=3 a frog can jump steps like:
// 1-1-1-1 or 1-1-2 or 1-2-1 or 2-1-1 or 2-2 or 3-1 or 1-3. Which gives 7 possible jump ways.

// Function type
// Function will receive as parameters:
// steps a number from 1 to 200 : amount of steps in a staircase.
// maxJumpLength a number from 1 to 200 : top limit of how many steps a frog can jump down at 1 time.
// Function should return a number - BigInt (because some results can be really big) of all possible ways the frog can go down the staircase.
// All inputs will be valid. maxJumpLength can be bigger than steps but you should consider the real amount of steps passed over.
// Good luck!

// solution:
function countFrogJumpWays(steps, maxJumpLength) {
  // Create an array to store the number of ways for each step
  const ways = Array(steps + 1).fill(BigInt(0));
  
  // There is only one way to reach the first step
  ways[0] = BigInt(1);

  // Calculate the number of ways for each step
  for (let i = 1; i <= steps; i++) {
    // Calculate the number of ways by summing the number of ways
    // from the previous steps within the maximum jump length
    for (let j = 1; j <= maxJumpLength && j <= i; j++) {
      ways[i] += ways[i - j];
    }
  }

  return ways[steps];
}