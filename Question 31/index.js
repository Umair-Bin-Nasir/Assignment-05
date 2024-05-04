"use strict";
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
const inputString = "hello world";
const character = "o";
const occurrences = countOccurrences(inputString, character);
console.log(`The character '${character}' appears ${occurrences} times in the string.`);
