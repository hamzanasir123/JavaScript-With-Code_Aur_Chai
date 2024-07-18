//************************************Conversion******************** */
let myName = "Hamza Nasir";
let score = 43;

let valueInNumber = Number(myName);
console.log(valueInNumber); //* NaN Not a Number

let valueInNumber1 = Number(score);
console.log(score); // 33

//* "33" => 33
//* "33abc" => NaN
//* true => 1;
//* false => 0;

let isLoggedIn = 1;
let booleanIsLOggedIn = Boolean(isLoggedIn);
console.log(booleanIsLOggedIn);

let isLoggedIn1 = "";
let booleanIsLOggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLOggedIn1);

let isLoggedIn2 = "Hamza";
let booleanIsLOggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLOggedIn2);

//* 1 => true;
//* 0 => false;
//* "" => false;
//* "Hamza" => true;

let someNumber = 34;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
