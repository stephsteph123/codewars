//problem
// A runner, who runs with base speed s with duration t will cover a distances d: d = s * t
// However, this runner can sprint for one unit of time with double speed s * 2
// After sprinting, base speed s will permanently reduced by 1, and for next one unit of time runner will enter recovery phase and can't sprint again.

// Your task, given base speed s and time t, is to find the maximum possible distance d.

//solution
//input
//s = base speed
//t = number of numbers
//d = total distance
//rules:
//sprint = s*2
//once sprint happens once, s = (s-1)
// sprint can happen again, however, must wait tx1

//solution: loop through where you sprint off the first one, and keep sprinting and add to total
//add up total and push to array
//sort array largest to smallest, produce the largest value?


// function solution(s, t) { 
//   const sprint = s*2
//   let newSpeed = 0;
//   let recovery = newSpeed - 1
  
//   console.log(s + s + s + sprint)
  
  
//   for (let i = 1; i < t; i++) {
//     // nosprint
//     newSpeed += s
//   }
//   return newSpeed
// }