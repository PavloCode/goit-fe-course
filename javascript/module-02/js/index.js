'use strict'
let userInput;
const numbers = [];
let total = 0;
let exit = true;
let isValid;
let num;

do {
    userInput = prompt('Введите число');
    if (userInput !== null) {
        num = Number(userInput);
        isValid = !Number.isNaN(num);
        if (isValid) {
            numbers.push(num);
        } else {
            alert('Было введено не число, попробуйте еще раз');
            isValid = true;
        }
    } else {
        isValid = false;
    }
} while (isValid);

if (numbers.length !== 0) {
    for (let index = 0; index < numbers.length; index += 1) {
        total += numbers[index];

    }
}
alert(`Общая сумма чисел равна ${total}`);