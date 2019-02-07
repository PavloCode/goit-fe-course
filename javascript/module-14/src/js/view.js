import EventEmitter from '../services/event-emitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.form = document.querySelector('.js-form');
        this.deleteBt = document.querySelector('.cards-container');
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.deleteBt.addEventListener('click', this.deleteCard.bind(this));
    }
    handleFormSubmit(event) {
        event.preventDefault();
        this.getUrl();
        document.querySelector('.js-input').value = '';
    }
    getUrl() {
        const inputUrl = document.querySelector('.js-input').value;
        this.emit('inputValue', inputUrl);
    }
    renderPage(val) {
        let arrayItems = val;

        if (localStorage.getItem('items')) {
            this.arrayItems = JSON.parse(localStorage.getItem('items'));
            const list = document.querySelector('.cards-container');
            const source = document.querySelector('#card-template').innerHTML.trim();
            const template = Handlebars.compile(source);
            const markcup = arrayItems.reduce(function(acc, item) {
                return acc + template(item);
            }, "");
            list.innerHTML = markcup;
        } else {
            alert('в localStorage ничего нет', localStorage.getItem('items'));
        }
    }
    deleteCard(event) {
        event.preventDefault();
        const target = event.target;
        if (target.tagName !== "BUTTON") return;
        this.emit('target', target);
    }
}
window.onload = function() {
    if (localStorage.getItem('items')) {
        let val = JSON.parse(localStorage.getItem('items'));
        let instance = new View();
        instance.renderPage(val);
    }
};