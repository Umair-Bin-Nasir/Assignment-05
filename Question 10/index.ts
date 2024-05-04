function countPositiveNumbers(numbers: number[]): number {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    return count;
}
const numbersArray: number[] = [-2, -1, 0, 1, 2, 3, 4];
const positiveCount = countPositiveNumbers(numbersArray);
console.log("Number of positive numbers:", positiveCount);
