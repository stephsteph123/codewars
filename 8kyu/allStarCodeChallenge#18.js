// DESCRIPTION:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

//my solution:
function strCount(str, letter) {
  let count = 0;
  for (item of str) {
    if (item === letter) {
      count += 1;
    }
  }
  return count;
}
