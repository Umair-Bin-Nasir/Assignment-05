"use strict";
function incrementAll(arr) {
    return arr.map(num => num + 1);
}
const numbersArray = [1, 2, 3, 4, 5];
const incrementedArray = incrementAll(numbersArray);
console.log("Incremented array:", incrementedArray);
