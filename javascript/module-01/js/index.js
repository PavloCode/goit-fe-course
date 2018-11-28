'use strict'
const adminLogin = 'admin';
const adminPassword = '1111';
let userPassword, userLogin;

userLogin = prompt('Введите логин');
if (userLogin === adminLogin) {
    userPassword = prompt('Введите пароль');
    if (userPassword === adminPassword) {
        alert('Добро пожаловать !')
    } else if (userPassword === null) {
        alert('отменено пользователем');
    } else if (userPassword !== adminPassword) {
        alert('Неверный пароль !')
    }
} else if (userLogin === null) {
    alert('отменено пользователем');
} else if (userLogin !== adminLogin) {
    alert('Неверный логин')
}