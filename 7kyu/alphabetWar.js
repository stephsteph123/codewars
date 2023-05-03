// problem:
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

const leftSide = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
};

const rightSide = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
};

// solution loops
// function alphabetWar(fight) {
//   const leftArr = [];
//   const rightArr = [];
//   const newArr = fight.split('')
//   for (let i of newArr){
//     if (leftSide[i]){
//       leftArr.push(leftSide[i])
//     } else if (rightSide[i]) {
//     rightArr.push(rightSide[i])
//   }
// }
// leftFinal = leftArr.reduce((a, b) => a + b, 0)
// rightFinal = rightArr.reduce((a, b) => a + b, 0)

// if(leftFinal > rightFinal) {
//   return "Left side wins!";
// } else if (rightFinal > leftFinal){
//   return "Right side wins!";
// } else {
//     return "Let's fight again!";
// }
// };

// solution refactor
function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

alphabetWar("z");
alphabetWar("zdqmwpbs");
alphabetWar("zzzzs");
alphabetWar("wwwwww");
