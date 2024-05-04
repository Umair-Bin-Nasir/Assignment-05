"use strict";
function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
const numbersArray = [10, 5, 20, 3, 8];
const smallestNumber = findSmallestNumber(numbersArray);
console.log("Smallest number:", smallestNumber);
