const assertEqual = function assertEqual(actual, expected) {
    if (!actual) return console.log("Error: actual is not provided..")
    if (!expected) return console.log("Error: expected is not provided..")

    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);

}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);