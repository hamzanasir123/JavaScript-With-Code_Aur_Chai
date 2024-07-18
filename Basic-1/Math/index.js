//?                         MATH                                   
console.log(Math); //! Object [Math] {}
console.log(Math.abs(-7)); //! 7 
//*This Method Convert
//* Negative Value Into Positive
console.log(Math.abs(7)); //! 7
//* This Method Cant Convert
//* Positive Value Into Nagative
console.log(Math.round(7.3)); //! 7
//* This Method round Off The Number
console.log(Math.round(7.7)); //! 8  
//* If After Point First Number Is >= 5 
//*Then Its Add 1 in Before Point Number
console.log(Math.ceil(3.2)); //! 4 
//* if After Point First Number is > 0 
//*This Method Plus 1 In Before Point Number 
console.log(Math.floor(3.2)); //! 3
//* However After Point First Number is > 0 
//*This Method Never Add  
console.log(Math.min(4, 32, 2, 65, 7, 8, 898)); //! 2
//* This Method Find A Smallest Number In Array
console.log(Math.max(4, 32, 2, 65, 7, 8, 898)); //! 898
//* This Method Find A Largest Number in Array
console.log((Math.random() * 10) + 1);
//! Its Not Constant
//* This Method Gemerate A Number Between 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);
var min = 10;
var max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
