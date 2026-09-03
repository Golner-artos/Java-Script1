let number = 10;
let string = "Hello";
let boolean = true;
let symbol = Symbol("symbol");
let bigInt = 123456789012345678901234567890n;
let nullValue = null;
let undefinedValue = undefined;
let object = { name: "Alex", age: 20 };

console.log(number);
console.log(string);
console.log(boolean);
console.log(symbol);
console.log(bigInt);
console.log(nullValue);
console.log(undefinedValue);
console.log(object);


let num = Number(prompt("Веедите число  :"));
console.log("Квадрат числа:", num ** 2);


let bigNumber = Number.MAX_SAFE_INTEGER + 1;

console.log("Число:", bigNumber);
console.log("Тип:", typeof bigNumber);


let isRaining = Math.random() < 0.5;

if (isRaining) {
    console.log("На улице дождь,возьмите зонт!");
} else {
    console.log("Сегодня солнечно!");
}


let firstName = "Alex";
let lastName = "Morrow";

let fullName = firstName + " " + lastName;

console.log(fullName);


let product = "apples";
let price = 25;

console.log("Price of " + product + " - " + price + " UAH.");


let x;
let y = null;

console.log("x:", x, "| type:", typeof x);
console.log("y:", y, "| type:", typeof y);