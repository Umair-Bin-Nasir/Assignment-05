function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    if (numbers.length === 0) {
        throw new Error("Array must contain at least one number");
    }
    let min = numbers[0];
    let max = numbers[0];
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const num = numbers[i];
        sum += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    const average = sum / numbers.length;
    return { min, max, average };
}
const numbersArray: number[] = [5, 10, 2, 8, 15];
const result = minMaxAverage(numbersArray);
console.log(result);