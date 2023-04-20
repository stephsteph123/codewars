// problem:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

//input:
//array of objects with devs attending next coding meeting
//objects contain language aka looking for ruby

//output:
//true (< 1 ruby dev)
//false (> 1 ruby dev)

//steps:
//filter through list to see if langugae === ruby
//return true or false



// solution:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function isRubyComing(list) {
  return list.some(x => x.language === "Ruby")
}

isRubyComing(list1)
