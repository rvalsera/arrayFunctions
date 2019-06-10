import find from "./array exercises/array.find.js";
import findIndex from "./array exercises/Array.findIndex.js";

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Array.find
var findResult = find(numbers, 1);
console.log(findResult);

//Array.findIndex
var findIndexResult = findIndex(numbers, 9);
console.log(findIndexResult);

//Array.filter
