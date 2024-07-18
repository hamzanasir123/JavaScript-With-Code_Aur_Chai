//////////////////////////Number/////////////////////////
var score1 = 152;
console.log(score1);
var balance = new Number(180);
console.log(balance);
console.log(balance.toString().length); //* Convert Into String
console.log(balance.toFixed(1)); // * 180.0
console.log(balance.toFixed(2)); //*  180.00
var otherNumber = 543.7333;
console.log(otherNumber.toPrecision(3)); //* 544
console.log(otherNumber.toPrecision(2)); //* 5.4e+2
//* Number of significant digits. Must be in the range 1 - 21, inclusive.
//* Returns a string containing a number represented either in exponential
//* or fixed-point notation with a specified number of digits.
var num = 190000000;
console.log(num.toLocaleString()); //* 190,000,000
