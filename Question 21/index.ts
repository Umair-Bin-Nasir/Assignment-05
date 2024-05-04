function calculateProduct(numbers: number[]): number {
    let product = 1;
    for (const num of numbers) {
        product *= num;
    }
    return product;
}
const numbersArray: number[] = [1, 2, 3, 4, 5];
const product = calculateProduct(numbersArray);
console.log("Product:", product);
