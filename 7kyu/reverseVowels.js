//  problem:
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

// solution:
function reverseVowels(str) {
  const vowels = ["a","e","i","o","u"];
  const newArr = str.split("");
  const vowelArr = [];
  const finalArr = [];
  for (let i = 0; i < str.length; i++){
  if (vowels.includes(newArr[i])){
    finalArr.push("")
    vowelArr.push(newArr[i])
  } else {
    finalArr.push(newArr[i])
  }
}
for (let i = 0; i < finalArr.length; i++) {
  if(finalArr[i] === ""){
    finalArr[i] = vowelArr[vowelArr.length-i];
  }
}
console.log(finalArr)
}

// better solution:
const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
};


reverseVowels("Tomatoes")
// reverseVowels("Reverse Vowels In A String")