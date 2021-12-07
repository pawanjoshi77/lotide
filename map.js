const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

    const results = [];

    for (let item of array) {
        results.push(callback(item));
    }

    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const assertEqual = function assertEqual(actual, expected) {

    if (eqArrays(actual, expected))
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);

}

function eqArrays(a, b) {

    const firstArray = a;
    const secondArray = b;

    if (firstArray.length !== secondArray.length) return false;

    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] !== secondArray[i]) return false;
    }

    return true;
}

assertEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't'])