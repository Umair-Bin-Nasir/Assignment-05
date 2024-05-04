function countOccurrences(arr: any[], element: any): number {
    return arr.reduce((count, current) => {
        return current === element ? count + 1 : count;
    }, 0);
}
const array: any[] = [1, 2, 2, 3, 4, 4, 4, "apple", "banana", "banana", "apple", "banana"];
const elementToCount = "banana";
const occurrences = countOccurrences(array, elementToCount);
console.log(`Occurrences of ${elementToCount}:`, occurrences);