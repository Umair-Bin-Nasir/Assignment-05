function incrementAll(arr: number[]): number[] {
    return arr.map(num => num + 1);
}
const numbersArray: number[] = [1, 2, 3, 4, 5];
const incrementedArray = incrementAll(numbersArray);
console.log("Incremented array:", incrementedArray);