// Write a converter function that accepts a temperature in Fahrenheit and returns the temperature in Celsius.
// For your reference, here is the equation for converting Fahrenheit to Celsius: T(°C) = (T(°F) - 32) × 5/9
// Examples
// 1.// INPUT: converter(77);
// OUTPUT: 25
// 2.// INPUT: converter(32);
// OUTPUT: 0

var clesius;

function converter(a){
   var store;
var celsius;
   store = (a - 32);
   celsius = (store * (5/9));
  // console.log(celsius);
    return celsius;
}
//return clesius;

console.log(converter(32));
console.log(converter(77));