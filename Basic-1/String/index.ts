//*                             String

const myName1 = "Hamza Nasir";
const repoCount = 10;

console.log(myName1 + repoCount + "Value");
// Dont Use This Type

// Use This
console.log(`Hello My Name Is ${myName1} And My Repo Count Is ${repoCount}`);
// Plus Point
console.log(`Hello My Name Is ${myName1.toUpperCase()} And My Repo Count Is ${repoCount.toString()}`);

// Another Way To Declare A Veriable

const gameName = new String('Hamza-Nasir');
console.log(gameName[0]);
// console.log(gameName.__proto__);
// it Giives You An Object {};

console.log(gameName.length); // Gives You Lenght
console.log(gameName.toLowerCase()); // COnvert into LowerCase
console.log(gameName.toUpperCase()); // COnvert into UpperCAse
console.log(gameName.charAt(2)); // Gives You A Character In Specific Index
console.log(gameName.indexOf('a')); // Gives You A Index Of A Specifec Charachter

const newString =  gameName.substring(0,4) // its LIke A Slice In String
console.log(newString);

const anotherString = gameName.slice(-2,3); // its Starts With Reverse When You Give -
console.log(anotherString);

const newString1 = "     Hamza      Nasir     ";
console.log(newString1); //* "     Hamza      Nasir     "
console.log(newString1.trim()); //* "Hamza Nasir"

const url = "http://hamzanasir.com/hamza%20Nasir"
console.log(url.replace('%20','-')); //* http://hamzanasir.com/hamza-Nasir


const url1 = "Absolutly Not";
//* console.log(url1.includes('Not'));
//* console.log(url1.includes('not'));

const multipleStrings = "My-Name-Is-Hamza-Nasir";
console.log(multipleStrings.split('-'));
