const assertEqual = function assertEqual(actual, expected) {

    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);

}

function findKeyByValue(obj, value) {
    let result;
    Object.keys(obj).forEach(key => {
        if (obj[key] === value)
            result = key;
    });
    console.log(Object.keys(obj));
    return result;
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");