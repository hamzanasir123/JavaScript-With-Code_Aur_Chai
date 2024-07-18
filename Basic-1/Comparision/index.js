// *********************Comparison*************************\\
var Comparison1 = 44 > 54; // false
var Comparison2 = 44 < 54; // true
var Comparison3 = 44 >= 54; // false
var Comparison4 = 44 <= 54; // true
// typescript dont allow to compare different data types
// console.log("2" > 1); // Error
// let id = Symbol('Abc');
// let id2 = Symbol('Abc');
// console.log(id === id2); // False
/**
 * HI
 * * I Am Hamza Nasir
 * ! I Am 23 Years Old
 * ? I Am Lerning Web Devolopment Course?
 * TODO : One Day I Will Be A Top Devoloper
 * @param myparam IN SHAH ALLAH
 */
//                   Plz Read .io File
// Stack (Primitive)(Receive A Copy),  Heap (Non-Primitive)(Orignal Value Reference)
var myCountryName = "Pakistan";
var homeLand = myCountryName;
homeLand = "England";
console.log(homeLand); // England
console.log(myCountryName); // Pakistan
var user = {
    email: "hk343454@gmail.com",
    cellNo: 1234567890
};
var userTwo = user;
userTwo.email = "Hamzanasir@gmail.com"; // Its Changing In Orignal Object
console.log(user.email); // Hamzanasir@gmail.com
console.log(userTwo.email); // Hamzanasir@gmail.com
