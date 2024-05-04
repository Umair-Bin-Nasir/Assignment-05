function reverseArray<T>(arr: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Reversed array:", reversedArray);
