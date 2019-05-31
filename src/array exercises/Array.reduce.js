/*  ...................
    array.reduce method
    ···················
*/

const array1 = [1, 2, 3, 4];
const reducer = (accum, currentValue) => accum + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

/*  ...............
    reduce function
    ···············
*/

var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// functions that can be used as input in the reduce function
function whichIsLargest(currentHighest, currentValue, index, array1) {
    if (currentHighest < currentValue) {
        currentHighest = currentValue;
        return currentHighest;
    } else {
        return currentHighest;
    }
}

function sum(accum, currentValue, index, array) {
    let result = accum + currentValue;
    return result;
}

function reduce(theArray, theFunction, initialValue = 0) {

    for (let i = 0; i < theArray.length; i++) {
        var result = theFunction(initialValue, theArray[i], i, theArray);
        initialValue = result;
    }

    return result;
}

console.log(reduce(listOfNumbers, sum));
