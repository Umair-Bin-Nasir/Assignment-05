"use strict";
function squareNumbers(numbers) {
    const squaredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredArray.push(numbers[i] * numbers[i]);
    }
    return squaredArray;
}
const numbersArray = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbersArray);
console.log("Squared numbers:", squaredNumbers);
