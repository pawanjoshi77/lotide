const assertEqual = function assertEqual(actual, expected) {

    if (actual === expected)
        console.log("✅✅✅ Assertion Passed:", actual, `===`, expected);
    else if (actual !== expected)
        console.log("🔴🔴🔴 Assertion Failed:", actual, "!==", expected);

}

function eqArrays(a, b) {

    const firstArray = a;
    const secondArray = b;

    if (firstArray.length !== secondArray.length) return false;

    for (let i = 0; i < firstArray.length; i++) {

        console.log('FirstArray: ', firstArray[i], ' SecondArray: ', secondArray[i])

        if (firstArray[i] !== secondArray[i]) return false;
    }

    return true;
}

const eqObjects = function(object1, object2) {

    const sizeOne = Object.keys(object1).length;
    const sizeTwo = Object.keys(object2).length;

    if (sizeOne !== sizeTwo)
        return false;
    else
        for (let key in object1) {

            if (Array.isArray(object1[key])) {

                return eqArrays(object1[key], object2[key])

            } else {

                if (object1[key] !== object2[key]) return false;
            }

        }

    return true;

};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true);

// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);

assertEqual(eqObjects(cd, cd2), false);