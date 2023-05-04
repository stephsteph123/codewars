// problem:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// solution:
function makeNegative(num) {
  if (num < 0){
    return num;
  } else if (num > 0){
    newNum = num - num - num;
    return newNum
  } else {
    return 0;
  }
}


//simplier:
function makeNegative(num) {
  return num < 0 ? num : -num;
}

makeNegative(42)