// problem:
// Input : an array of integers.
// Output : this array, but sorted in such a way that there are two wings:
// the left wing with numbers decreasing,
// the right wing with numbers increasing.
// the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.
// each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// solution:
function makeValley(arr) {
  arr.sort((a, b) => b - a);
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  rightArr.sort((a, b) => a - b);
  let result = leftArr.concat(rightArr)
  return result
}


// smarter solution:
function makeValley(arr) {
  var leftWing = []
  var rightWing = []
  arr.sort((a, b) => b - a)
    .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
  
  return [...leftWing, ...rightWing]
}

makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]);
