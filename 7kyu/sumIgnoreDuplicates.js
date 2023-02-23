// DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function should return 10.

//my solution:
function sumNoDuplicates(numList) {
  let result = 0;
  if (!numList){
      return 0;
  }
  for (item of numList){
    if(numList.indexOf(item) === numList.lastIndexOf(item)){
      result += item
        }
      }
  return result;
    };