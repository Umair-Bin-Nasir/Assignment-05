function filterByLength(strings: string[], n: number): string[] {
    return strings.filter(str => str.length > n);
}
const stringsArray: string[] = ["apple", "banana", "orange", "kiwi", "mango"];
const filteredStrings = filterByLength(stringsArray, 5);
console.log("Filtered strings:", filteredStrings);