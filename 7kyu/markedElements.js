// Problem:
// Define a method/function that removes from a given array of integers all the values contained in a second array.

// solution:
function l(integer_list, values_list) {
  newArr = [];
  for (let i = 0; i < integer_list.length; i++) {
    if (!values_list.includes(integer_list[i])) {
      newArr.push(integer_list[i]);
    }
  }
  return newArr;
}

integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
l(integer_list, values_list);
