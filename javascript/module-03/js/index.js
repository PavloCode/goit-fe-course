'use strick'

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const min = 4;
const max = 16;

//проходить проверку на длину от 4 до 16-ти символов включительно

const isLoginValid = function(login) {
    let valid;

    let arr = login.split('');
    if (arr.length >= min && arr.length <= max) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
};

//проверяет наличие login в массиве allLogins на уникальность

const isLoginUnique = function(allLogins, login) {
    let valid;

    for (let value of allLogins) {
        if (value === login) {
            console.log('такой есть');
            valid = false;
            return;
        } else {
            console.log('такого нет');
            valid = true;
        }
    }
    return valid;
};

//скрипт добавления логина в массив logins

const addLogin = function(allLogins, login) {

    let validLength = isLoginValid(login);
    let validUnique;
    console.log(validLength);
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
addLogin(logins, userlogin);