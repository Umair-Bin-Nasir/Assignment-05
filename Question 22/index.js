"use strict";
function filterByLength(strings, n) {
    return strings.filter(str => str.length > n);
}
const stringsArray = ["apple", "banana", "orange", "kiwi", "mango"];
const filteredStrings = filterByLength(stringsArray, 5);
console.log("Filtered strings:", filteredStrings);
