function eqArrays(a, b) {
    const firstArray = a;
    const secondArray = b;

    if (firstArray.length !== secondArray.length) return false;

    // matching each element of firstArray with secondArray
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) return false;
    }
    return true;
}

function assertArraysEqual(a, b) {

    if (a === b)
        console.log("Result: The two arrays are equal");

    else console.log("Result: The two arrays are not equal");
}

/**
 * @param {Array} inputArraay
 * @return {Array} 
 * */

function middle(inputArray) {
    const result = [];
    if (inputArray.length > 0 && inputArray.length < 3)
        return result;
    else if (inputArray.length > 2 && inputArray.length % 2 === 0) {
        let firstIndex = Math.floor(inputArray.length / 2) - 1;
        let secondIndex = Math.floor(inputArray.length / 2);
        let resultArray = [inputArray[firstIndex], inputArray[secondIndex]];

        return resultArray;
    }
    let midIndex = Math.floor(inputArray.length / 2);
    let resultArray = [inputArray[midIndex]];
    return resultArray;
}

const inputArrayResult = middle([1, 2, 3, 4, 5, 6]);
console.log(inputArrayResult);