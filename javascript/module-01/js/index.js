'use strict'
const adminLogin = 'admin';
const adminPassword = '1111';
let userPassword, userLogin;
// login
userLogin = prompt('Введите логин');
switch (userLogin) {
    case adminLogin:
        alert('Добро пожаловать !');
        break;
    case null:
        alert('Отменено пользователем');
        break;
    default:
        alert('Неверный логин');
        break;
}
// password
if (userLogin === adminLogin) {
    userPassword = prompt('Введите пароль');
    switch (userPassword) {
        case adminPassword:
            alert('Добро пожаловать !');
            break;
        case null:
            alert('Отменено пользователем');
            break;
        default:
            alert('Неверный пароль');
            break;
    }
}