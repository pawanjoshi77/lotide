const assertEqual = function(actual, expected) {
    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);
};

function eqArrays(a, b) {

    const firstArray = a;
    const secondArray = b;

    // [1,2,6] and [1,2,3,4] false
    if (firstArray.length !== secondArray.length) return false;

    // matching each element of firstArray with secondArray
    for (let i = 0; i < firstArray.length; i++) {
        console.log('FirstArray: ', firstArray[i], ' SecondArray: ', secondArray[i])
        if (firstArray[i] !== secondArray[i]) return false;
    }
    return true;
}

assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true);