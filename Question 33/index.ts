function sortArray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}
const unsortedArray: number[] = [5, 2, 9, 1, 7];
const sortedArray: number[] = sortArray(unsortedArray);
console.log("Sorted Array:", sortedArray);