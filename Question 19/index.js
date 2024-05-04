"use strict";
function findElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
const array = [1, 2, 3, 4, 5];
const elementToFind = 3;
const index = findElementIndex(array, elementToFind);
console.log(`Index of ${elementToFind}: ${index}`);
