function findElementIndex(arr: any[], element: any): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
const array: number[] = [1, 2, 3, 4, 5];
const elementToFind: number = 3;
const index = findElementIndex(array, elementToFind);
console.log(`Index of ${elementToFind}: ${index}`);