function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
const sortedArray: number[] = [1, 2, 3, 4, 5];
const unsortedArray: number[] = [1, 3, 2, 4, 5];
console.log("Is sorted:", isSorted(sortedArray));
console.log("Is sorted:", isSorted(unsortedArray));