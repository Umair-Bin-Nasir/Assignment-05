function sumOfElements(arr: number[], isEven: boolean): number {
    return arr.reduce((acc, curr) => {
        if (isEven && curr % 2 === 0) {
            return acc + curr;
        } else if (!isEven && curr % 2 !== 0) {
            return acc + curr;
        }
        return acc;
    }, 0);
}
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Sum of even elements:", sumOfElements(numbersArray, true));
console.log("Sum of odd elements:", sumOfElements(numbersArray, false));