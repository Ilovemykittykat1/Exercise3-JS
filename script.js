// Part 1 Arithmetic Operators
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);


// part 2 in Ex  (>, <, >=, <=, ===, !==).
console.log("is num1 greater than num2 :" , num1>num2);
console.log("is num1 less than num2 :" , num1<num2);
console.log("is num1 less than or equal num2 :" , num1<=num2);
console.log("is num1 greater than or equal num2 :" , num1>=num2);
console.log("is num1 same type and value as  num2 :" , num1===num2);
console.log("is num1 doest equal  num2 :" , num1!==num2);

// part 3 isSunny, isWeekend).
let isSunny=true;
let isWeekend=true;
//Use logical operators (&&, ||) to check combinations of conditions.
console.log("is it good for picnic :" , isSunny&&isWeekend);
console.log("is it sunny or weekend :" , isSunny||isWeekend);   

//Part 4 
let score =40;
score +=5;
console.log("New score :" , score);
score *=2;
console.log("New score :" , score);

//Part 5
let userName = prompt("What is your name?", "Ex: John Doe"); 
let userAge = prompt("What is your age?", "Ex: 28");