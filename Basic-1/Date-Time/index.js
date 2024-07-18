//?                        Date                         
var todayDate = new Date();
console.log(todayDate);
//* 2024-07-15T22:39:40.347Z
console.log(todayDate.toString());
//* Tue Jul 16 2024 03:39:40 GMT+0500 (Pakistan Standard Time)
console.log(todayDate.toDateString());
//* Tue Jul 16 2024
console.log(todayDate.toLocaleString());
//* 7/16/2024, 3:39:40 AM
console.log(todayDate.toLocaleDateString());
//* 7/16/2024
console.log(todayDate.toISOString());
//* 2024-07-15T22:39:40.347Z
var myCreateDate = new Date(2025, 4, 5, 6, 8, 4).toDateString();
console.log(myCreateDate);
var myCreateDate1 = new Date("02-03-2025").toDateString();
console.log(myCreateDate1);
var date = new Date();
console.log(date.toLocaleString());
//* 7/16/2024, 4:00:59 AM
console.log(date.getMonth() + 1);
//* 7
console.log(date.getDay());
//* 2
console.log(date.toLocaleString('default', {
    weekday: "long",
    timeZone: "Animation"
}));
