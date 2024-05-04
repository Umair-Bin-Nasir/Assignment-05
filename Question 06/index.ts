function calculateArea(radius: number){
    let pi = 3.14;
    let Area = pi * radius * radius;
    return Area;
}
const radius = 5;
const Area = calculateArea(radius);
console.log("Area of circle is ", Area);