// problem:
// Let be n an integer prime with 10 e.g. 7.
// 1/7 = 0.142857 142857 142857 ....
// We see that the decimal part has a cycle: 142857. The length of this cycle is 6. In the same way:
// 1/11 = 0.09 09 09 .... Cycle length is 2.
// Task
// Given an integer n (n > 1) the function cycle(n) returns the length of the cycle if there is one otherwise (n and 10 not coprimes) return -1.

// solution:
function cycle(n) {
  if (n <= 1 || n % 2 === 0 || n % 5 === 0) {
    return -1; // n and 10 are not coprime, so there is no cycle
  }

  let remainder = 1;
  let cycleLength = 0;
  const remaindersSeen = {};

  while (remainder !== 0) {
    if (remaindersSeen.hasOwnProperty(remainder)) {
      return cycleLength - remaindersSeen[remainder];
    }

    remaindersSeen[remainder] = cycleLength;
    remainder = (remainder * 10) % n;
    cycleLength++;
  }

  return -1; // No cycle found
}


cycle(33)
// cycle(18118)
cycle(69)
// cycle(197)
// cycle(65)