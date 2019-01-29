'use strict'
import './styles.css';
/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

const form = document.querySelector('.js-form');
const deleteBt = document.querySelector('.cards-container');
form.addEventListener('submit', handleFormSubmit);
let arrayItems = [];

window.onload = function() {
    renderPage();
};

function handleFormSubmit(event) {
    event.preventDefault();
    getUrl();
    renderPage();
    document.querySelector('.js-input').value = '';
}

function getUrl() {
    const inputUrl = document.querySelector('.js-input').value;
    const hasDublicate = arrayItems.some(function(item) {
        return item.url === inputUrl;
    });
    if (hasDublicate !== true) {
        if (inputUrl !== '') {
            arrayItems.unshift({
                url: inputUrl
            });
            localStorage.setItem('items', JSON.stringify(arrayItems));
        }
    } else {
        alert('This value has been registered and can not be written againe!');
    }
}

function renderPage() {
    if (localStorage.getItem('items')) {
        arrayItems = JSON.parse(localStorage.getItem('items'));
        const list = document.querySelector('.cards-container');
        const source = document.querySelector('#card-template').innerHTML.trim();
        const template = Handlebars.compile(source);
        const markcup = arrayItems.reduce(function(acc, item) {
            return acc + template(item);
        }, "");
        list.innerHTML = markcup;
    }
}

deleteBt.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName !== "BUTTON") return;
    arrayItems = arrayItems.filter(function(item) {
        return item.url !== target.previousElementSibling.innerHTML;
    });
    localStorage.setItem('items', JSON.stringify(arrayItems));
    renderPage();
});