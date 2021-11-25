/**
 * Removes duplicate element from Array 
 * @param {Array} source // [1,2,3]
 * @param {Array} itemsToRemove // [1,2]
 * @return {Array} // [3]
 */

function without(source, itemsToRemove) {

    const result = source.filter(val =>
        !itemsToRemove.includes(val));

    return result;
}

/**
 * console.log arrays are equal accordingly.
 * @param {Boolean} a
 * @param {Boolean} b
 */
function assertArraysEqual(a, b) {

    if (a === b)
        console.log("Result: The two arrays are equal");

    else console.log("Result: The two arrays are not equal");
}

/**
 * Checks if two arrays are equal
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 */
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

// Test Case for assertArraysEqual function
console.log("Running Test Case for assertArraysEqual function");
console.log("Result should be => 'The two arrays are equal'");

const eqArray = eqArrays([1, 2, 3], [1, 2, 3]);
assertArraysEqual(eqArray, true);

// Test Case for without function
console.log("Running Test Case for without function");
console.log("Result should be [3,4]");
const firstArraay = [1, 2, 3, 4];
const secondArray = [1, 2];
const withoutArray = without(firstArraay, secondArray);
console.log('Result: ', withoutArray);