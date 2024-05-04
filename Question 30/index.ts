function swapElements<T>(arr: T[], index1: number, index2: number): void {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Indices out of range");
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
const array: number[] = [1, 2, 3, 4, 5];
console.log("Before swapping:", array);
swapElements(array, 1, 3);
console.log("After swapping:", array);