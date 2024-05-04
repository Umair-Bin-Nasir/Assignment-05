"use strict";
function removeFalsyValues(arr) {
    return arr.filter(item => {
        return item !== false && item !== null && item !== 0 && item !== "" && item !== undefined && !Number.isNaN(item);
    });
}
const arrayWithFalsyValues = [false, null, 0, "", undefined, NaN, 42, "hello", true];
const filteredArray = removeFalsyValues(arrayWithFalsyValues);
console.log("Array with falsy values removed:", filteredArray);
