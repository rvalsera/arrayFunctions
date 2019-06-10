var array1 = [1, 4, 9, 16];

function funcion(x) {
    let retorno = x * 2;
    return retorno;
};

// pass an array and a function to map function
function map(original, func) {
    // declare empty array to store values after operation
    const result = [];

    // add the results of the function iterating over the original array's values
    for (let i = 0; i < original.length; i++) {
        result[i] = func(original[i]);
    };

    // return the array with the new values
    return result;
};

const map2 = map(array1, funcion);
console.log(map2);


