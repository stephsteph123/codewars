// problem:
// Enjoying your holiday, you head out on a scuba diving trip!
// Disaster!! The boat has caught fire!!
// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
// Go to work!

// solution: loop
// function fireFight(s){
//   const newStr = s.split("Fire")
//   const result = [];
//   let finalString = '';
//   for (let i of newStr){
//     result.push(`${i}~~`)
//   }
//   for (i = 0; i < result.length; i++){
//     finalString += result[i]
//   }
//   return finalString
// }

// solution: string.replace
function fireFight(s){
  const newStr = s.replaceAll('Fire', "~~")
  console.log(newStr)
}


fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast");
fireFight("Mast Deck Engine Water Fire");
fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain");