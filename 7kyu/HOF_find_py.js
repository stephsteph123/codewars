// problem:
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// solution

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

function getFirstPython(list) {
  let listy = list.filter(x => x.language === "Python");
  if (listy.length > 0){
    return `${listy[0].firstName}, ${listy[0].country}`;
  } else {
    return 'There will be no Python developers'
  }
}

getFirstPython(list1)