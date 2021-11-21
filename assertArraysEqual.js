function eqArrays(a, b) {

    const firstArray = a;
    const secondArray = b;

    if (firstArray.length !== secondArray.length) return false;

    // matching each element of firstArray with secondArray
    for (let i = 0; i < firstArray.length; i++) {
        console.log('FirstArray: ', firstArray[i], ' SecondArray: ', secondArray[i])
        if (firstArray[i] !== secondArray[i]) return false;
    }
    return true;
}

const assertEqual = function assertEqual(a, b) {

    if (a === b)
        console.log("The two arrays are equal");
    else if (a !== b)
        console.log("The two arrays are not equal");
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);