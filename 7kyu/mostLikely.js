// problem:
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// solution:
function mostLikely(prob1, prob2) {
  let newArrLeft = prob1.split(":");
  let leftTotal = newArrLeft[0] / newArrLeft[1];
  let newArrRight = prob2.split(":");
  let rightTotal = newArrRight[0] / newArrRight[1];
  if (leftTotal > rightTotal) {
    return true;
  } else {
    return false;
  }
}

mostLikely("1:3", "1:2");

//solution:
function mostLikely(prob1,prob2){
  let [a, b] = prob1.split(':');
  let [c, d] = prob2.split(':');
  
  return a/b > c/d;
}
