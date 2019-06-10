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
