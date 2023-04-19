//problem:
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// function isPowerOfTwo(n){
//   if (n === 1) {
//      return true;
//    }
//   if (n === 0){
//     return false;
//   }
//  if (n ** 2 === 0) {
//    return true;
//  } else {
//    return false;
//  }
// };

function isPowerOfTwo(n){
  const array = [];
  for (let i = 0; i < 100; i++) {
      array.push(Math.pow(2,i))
  }
  if (array.includes(n)) {
    return true;
  }
  else {
    return false;
  }
  };

  isPowerOfTwo(2)