// problem:
// Write a function that returns a latin square for any positive integer n.
// If you are interested in verifying that any array is a latin square, see Latin Square Validator.

// solution:
function makeLatinSquare(n) {
  const outerArr = [];

  for (let i = 0; i < n; i++) {
    const innerArr = [];
    let index = 0;
    
    for (let j = 0; j < n; j++) {
      if (i + j < n) {
        index = i + j;
      } else {
        index = i + j - n;
      }
      innerArr[index] = j + 1;
    }
    
    outerArr.push(innerArr);
  }
  
  return outerArr;
}

makeLatinSquare(4);
