//problem
// Your task is to return the number of JavaScript developers coming from Europe.

//solution:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
return list.filter(x => x.continent === "Europe" && x.language === "JavaScript").length
}

// loop option
// function countDevelopers(list) {
//   let count = 0;
//   for(l of list){
//     if (l.continent === "Europe" && l.language === "JavaScript"){
//       count = count + 1
//     }
//   }
//   return count
// }

countDevelopers(list1)