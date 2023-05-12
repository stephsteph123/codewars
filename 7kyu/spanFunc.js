// problem:
// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.


// solution:
function span(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) break
  }
  
  return [
    arr.slice(0, i),
    arr.slice(i)
  ]
}

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

var arr1 = [2, 4, 6, 1, 4, 8];
var arr2 = [1, 4, 5, 7, 6];
var arr3 = [13, 17, 19, 11, 21];

span(arr1, isEven);
