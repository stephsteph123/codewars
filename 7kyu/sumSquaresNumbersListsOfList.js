// DESCRIPTION:
// Write a function that sums squares of numbers in list that may contain more lists

// more solution:
function SumSquares(l) {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    if (Array.isArray(l[i])) {
      sum += SumSquares(l[i]);
    } else {
      sum += l[i] * l[i];
    }
  }
  return sum;
}