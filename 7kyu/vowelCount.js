// problem:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// solution:
function getCount(str) {
  let count = 0;
  const newArr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (
      newArr[i] === "a" ||
      newArr[i] === "e" ||
      newArr[i] === "i" ||
      newArr[i] === "o" ||
      newArr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

// better solution:
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

getCount("abracadabra")
