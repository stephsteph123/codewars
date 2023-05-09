// problem:
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// solution:
const sing = function () {
    let arr = [];
    for (let i = 99; i > 0; i--) {
      let s = `${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.`;
      arr.push(s);
      if (i === 1) {
        s = `Take one down and pass it around, no more bottles of beer on the wall.`;
      } else {
        s = `Take one down and pass it around, ${i-1} bottle${i-1 > 1 ? 's' : i-1 === 0 ? '' : ''} of beer on the wall.`;
      }
      arr.push(s);
    }
    arr.push('No more bottles of beer on the wall, no more bottles of beer.');
    arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    return arr;
  };
  
  
