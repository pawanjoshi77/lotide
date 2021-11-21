const assertEqual = function(actual, expected) {
    if (!actual) return console.log("Error: actual is not provided..")
    if (!expected) return console.log("Error: expected is not provided..")

    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);
};

const array = [1, 2, 3, 4, 5];


function head(array) {
    if (!array && (array.length === 0)) return undefined;
    else return array[0];
}

assertEqual(head(array), 1);
assertEqual(head(['a', 'b', 'c']), 'a');