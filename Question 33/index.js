"use strict";
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}
const unsortedArray = [5, 2, 9, 1, 7];
const sortedArray = sortArray(unsortedArray);
console.log("Sorted Array:", sortedArray);
