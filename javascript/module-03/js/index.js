'use strick'

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const min = 4;
const max = 16;

//проходить проверку на длину от 4 до 16-ти символов включительно

const isLoginValid = function(login) {
    let valid;
    if (login.length >= min && login.length <= max) {
        return valid = true;
    } else {
        return valid = false;
    }
};

//проверяет наличие login в массиве allLogins на уникальность

const isLoginUnique = function(allLogins, login) {
    let valid;
    if (allLogins.includes(login)) {
        console.log('такой логин есть');
        return valid = false;
    } else {
        console.log('такого логина нет');
        return valid = true;
    }
};

//скрипт добавления логина в массив logins

const addLogin = function(allLogins, login) {
    let validLength = isLoginValid(login);
    let validUnique;
    console.log('валидность длинны символов', validLength);
    const array = allLogins;
    // вызов метода на проверку длинны символов
    if (validLength) {
        validUnique = isLoginUnique(allLogins, login);
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }
    // вызов метода на проверку уникальности
    if (validUnique) {
        logins.push(login);
        alert('Логин успешно добавлен!');
        return;
    } else {
        alert('Такой логин уже используется!');
        return;
    }
};

const userlogin = prompt('Введите login от 4 до 16 символов');
if (userlogin !== null) {
    addLogin(logins, userlogin);
} else {
    alert('отменено пользователем');
}