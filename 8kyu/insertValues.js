// problem
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// solution:

//loop
// function invert(array) {
//   const newArr = [];
//   for (let arr of array) {
//     if (arr < 0) {
//       newArr.push(arr - arr -arr );
//     } else {
//       newArr.push(arr - arr -arr);
//     }
//   }
//   console.log(newArr)
//   return newArr
// }

// method
const invert = array => array.map(num => -num);

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([0]));
