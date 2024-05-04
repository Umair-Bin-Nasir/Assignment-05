function fahrenheitToCelsius(fahrenheitTemperatures: number[]): void {
    const celsiusTemperatures: number[] = [];
    for (let i = 0; i < fahrenheitTemperatures.length; i++) {
        const fahrenheit = fahrenheitTemperatures[i];
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusTemperatures.push(celsius);
    }
    console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
    console.log("Celsius Temperatures:", celsiusTemperatures);
}
const fahrenheitArray: number[] = [32, 68, 86, 104, 122];
fahrenheitToCelsius(fahrenheitArray);