//*                    Arrays
//* Array Is An Object,
//* Its Used To Collect Multiple Elements,
//* Multiple Types Of Elements,
//* In A Single Variable.
var myArr = [2, 4, 5, 6, 7, 8]; //* Simple Array
console.log(myArr);
var myArr2 = new Array("Hamza", "Nasir"); //* A Different Way To Declare An Array,
console.log(myArr2);
//! Array Method
//? PUSH
myArr2.push("Khan"); //* Push Add Element In The End Of The Array,
console.log(myArr2);
//?POP
myArr2.pop(); //* Pop Removes  Element In The End Of The Array,
console.log(myArr2);
//? Shift
myArr2.shift(); //* Shift Removes  Element In The Start Of The Array,
console.log(myArr2);
//? Unshift
myArr2.unshift("Usama"); //* Unshift Add  Element In The End Of The Array,
console.log(myArr2);
//? Includes
// myArr2.includes("Khan"); //* Includes Check An Element Is In The Array Or Not,
// console.log(myArr2);
//? IndexOf
var ind = myArr2.indexOf("Khan"); //* IndexOf Check The Index Of The Given Element,
console.log(ind);
//? Join
var jn = myArr2.join(); //* JOin 
console.log(jn);
console.log(typeof jn);
var mna = [0, 1, 2, 3, 4, 5, 6];
var mna2 = mna.slice(1, 3);
console.log(mna2);
console.log(mna);
var mna3 = [0, 1, 2, 3, 4, 5, 6, 7];
var mna4 = mna3.splice(1, 3);
console.log(mna4);
console.log(mna3);
