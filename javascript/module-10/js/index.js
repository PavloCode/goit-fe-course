/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const btAll = document.querySelector('.js-btAllUsers');
const inputId = document.querySelector('.js-inputId');
const inputName = document.querySelector('.js-inputAddName');
const inputAge = document.querySelector('.js-inputAddAge');
const inputDeleteId = document.querySelector('.js-inputRemoveId');
const inputUpdateId = document.querySelector('.js-inputUpdateId');
const inputUpdateName = document.querySelector('.js-inputUpdateName');
const inputUpdateAges = document.querySelector('.js-inputUpdateAge');
const clearBt = document.querySelector('.js-clear');
const info = document.querySelector('.js-info');
//------------------Events----------------------//

// Get all users
btAll.addEventListener('click', getAllUsers);
// Get user by id
const form = document.querySelector('.search-form');
form.addEventListener("submit", function(event) {
    event.preventDefault();
    getUserById(inputId.value);
});
//Create user - name, age
const createForm = document.querySelector('.create-form');
createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addUser(inputName.value, inputAge.value);
});
//Delete by id
const deleteUser = document.querySelector('.delete-form');
deleteUser.addEventListener('submit', function(event) {
    event.preventDefault();
    removeUser(inputDeleteId.value);
});
//Update by id, name, age
const updateForm = document.querySelector('.update-form');
updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    updateUser(inputUpdateId.value, inputUpdateName.value, inputUpdateAges.value);

});
// clear table view
clearBt.addEventListener('click', function() {
    info.innerHTML = '';
});
//------------------Get all users----------------------//
function getAllUsers() {
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(responce => {
            if (responce.ok) return responce.json();
            throw new console.Error("Error fetching data");
        })
        .then(data => {
            console.log(data.data);
            createElementsForAllUsers(data.data);
        })
        .catch(error => console.log('Error'));
}
//------------------By id----------------------//
function getUserById(id) {
    console.log(id);
    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(responce => {
            if (responce.ok) return responce.json();
            throw new console.Error("Error fetching data");
        })
        .then(data => {
            console.log(data);
            createElements(data);
        })
        .catch(error => {
            console.log('Error')
            errorMessage();
        });
}
//------------------Create----------------------//
function addUser(name, age) {
    fetch(`https://test-users-api.herokuapp.com/users/`, {
            method: 'POST',
            body: creatPost(name, age),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(responce => {
            if (responce.ok) return responce.json();
            throw new console.Error("Error fetching data");
        })
        .then(data => {
            console.log(data);
            createElements(data);
        })
        .catch(error => {
            console.log('Error')
            errorMessage();
        });
}
//------------------Remove----------------------//
function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'DELETE'
        })
        .then(responce => {
            if (responce.ok) return responce.json();
            throw new console.Error("Error fetching data");
        })
        .then(data => {
            console.log(data);
            createElements(data);
        })
        .catch(error => {
            console.log('Error')
            errorMessage();
        });
}
//------------------Update----------------------//
function updateUser(id, name, age) {

    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
            method: 'PUT',
            body: creatPost(name, age),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(responce => {
            if (responce.ok) return responce.json();
            throw new console.Error("Error fetching data");
        })
        .then(data => {
            console.log(data);
            createElements(data);
        })
        .catch(error => {
            console.log('Error')
            errorMessage();
        });
}
// addition functions
// for JSON
function creatPost(nameValue, ageValue) {
    return JSON.stringify(
        post = {
            name: nameValue,
            age: ageValue
        }
    );
}
// create <li> with succes date
function createElements(data) {
    const count = 3;
    const arr = ['id', 'name', 'age'];
    arr[0] = data.data.id !== undefined ? 'id' : '_id';
    for (let index = 0; index < count; index++) {
        const li = document.createElement('li');
        li.innerHTML = `${arr[index]} = ${data.data[arr[index]]}`;
        info.appendChild(li);
    }
}
// create <li> with error date
function errorMessage() {
    const li = document.createElement('li');
    li.innerHTML = 'Error';
    info.appendChild(li);
}
// create <li> for all users
function createElementsForAllUsers(arr) {
    for (let ob in arr) {
        console.log('work', arr[ob]);
        const liId = document.createElement('li');
        const liName = document.createElement('li');
        const liAge = document.createElement('li');
        liId.innerHTML = `id, ${arr[ob].id}`;
        liName.innerHTML = `name ${arr[ob].name}`;
        liAge.innerHTML = `age ${arr[ob].age}`;
        info.appendChild(liId);
        info.appendChild(liName)
        info.appendChild(liAge)

    }
}