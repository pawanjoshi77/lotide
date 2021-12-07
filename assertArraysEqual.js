const eqArrays = function eqArrays(a, b) {

    const firstArray = a;
    const secondArray = b;

    if (firstArray.length !== secondArray.length) return false;

    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] !== secondArray[i]) return false;
    }

    return true;
}

const assertArraysEqual = function assertArraysEqual(a, b) {

    if (a === b)
        console.log("The two arrays are equal");

    else if (a !== b)
        console.log("The two arrays are not equal");
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);