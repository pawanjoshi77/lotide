const assertEqual = function assertEqual(actual, expected) {

    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);

}

// const allItems = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];

// const itemsToCount = {
//     a: true,
//     d: true,
//     b: false,
//     f: true
// };

const countOnly = (allItems, itemsToCount) => {

    let obj = {};

    for (let item of allItems) {
        console.log(item);
        if (itemsToCount[item] === true) {
            //obj[item] += obj[item] || 0;
            if (!obj[item]) {
                obj[item] = 1
            } else {
                obj[item] = obj[item] + 1;
            }

        }
    }

    return obj;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);