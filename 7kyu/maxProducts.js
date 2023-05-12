// problem:
// Given an integer array arr. Your task is to remove one element, maximize the product of elements.
// The result is the element which should be removed. If more than one valid results exist, return the smallest one.

// solution:
function maximumProduct(arr) {
  let maxi = -Infinity
  let rm;
  for(let i = 0; i < arr.length; i++){
    let n = arr.slice(0, i).concat(...arr.slice(i + 1)).reduce((a, b) => a * b, 1)
    if(n > maxi){
      maxi = n
      rm = arr[i]
   }
    if(n == maxi)
      rm = Math.min(rm, arr[i])
  }
    return rm 
 }

maximumProduct([1, 2, 3]);
maximumProduct([-1, 2, -3]);
maximumProduct([-1, -2, -3]);
maximumProduct([-1, -2, -3, -4]);
maximumProduct([0, 1, 2, 3]);
maximumProduct([0, -1, -2, -3]);
maximumProduct([0, -1, -2, -3, -4]);
maximumProduct([0, -1, 2, -3, 4]);
maximumProduct([0, -1, 2, 3]);
maximumProduct([0, -1, -2, -3, 4]);
maximumProduct([0, 0, 1]);
maximumProduct([0, 0, -1]);
maximumProduct([0, -1, 1]);
maximumProduct([0, 0, -1, 1]);
maximumProduct([0, 0, 0]);
maximumProduct([0, 0, 1, 2, 3]);
maximumProduct([-1, -2, -3, 0, 1, 2, 3]);
maximumProduct([-1, -2, 0, 1, 2]);
maximumProduct([-1, -2, 1, 2]);
maximumProduct([-1, -2, -3, 1, 2, 3]);
