const temperatures = [23, 28, 20, 25, 30];
function findHighestTemperature(temps: number[]) {
    let highestTemp = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > highestTemp) {
            highestTemp = temps[i];
        }
    }
    return highestTemp;
}
const highestTemperature = findHighestTemperature(temperatures);
console.log("The highest temperature is:", highestTemperature);