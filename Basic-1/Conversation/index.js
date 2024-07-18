//************************************Conversion******************** */
var myName = "Hamza Nasir";
var score = 43;
var valueInNumber = Number(myName);
console.log(valueInNumber); //* NaN Not a Number
var valueInNumber1 = Number(score);
console.log(score); // 33
//* "33" => 33
//* "33abc" => NaN
//* true => 1;
//* false => 0;
var isLoggedIn = 1;
var booleanIsLOggedIn = Boolean(isLoggedIn);
console.log(booleanIsLOggedIn);
var isLoggedIn1 = "";
var booleanIsLOggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLOggedIn1);
var isLoggedIn2 = "Hamza";
var booleanIsLOggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLOggedIn2);
//* 1 => true;
//* 0 => false;
//* "" => false;
//* "Hamza" => true;
var someNumber = 34;
var stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
