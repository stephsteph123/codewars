// problem:

// Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

// solution:
function lastDigit(n, d) {
  const newN = n.toString().length
  newArr = [];
  if (d <= 0){
    return [];
  } else if (d > newN) {
    let char = n.toString().split('')
    for(i = 0; i <newN; i++){
      newArr.push(char[i])
    }
  } else {
    let char = n.toString().split('')
    for(i = 1; i <newN-1; i++){
      newArr.push(char[i])
    }
  }
  return newArr
}

console.log(lastDigit(1343,5));
console.log(lastDigit(1234,0));
console.log(lastDigit(123767,4));
console.log(lastDigit(34625647867585,10));


