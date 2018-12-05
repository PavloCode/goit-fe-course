'use strict'
/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};
/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

function Cashier(name, productDatabase) {
    // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта

    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.totalPrice = 0;


    this.getCustomerMoney = function(value) {
        this.customerMoney = value;
    };

    this.countTotalPrice = function(order) {
        for (const key in order) {
            this.totalPrice += order[key] * this.productDatabase[key];
        }
        return this.totalPrice;

    };

    this.countChange = function(totalPrice) {
        return this.customerMoney - this.totalPrice;
    };

    this.onSuccess = function(ch) {
        console.log(` Спасибо за покупку, ваша сдача ${ch}`);
    };
    this.onError = function() {
        console.log('Очень жаль, вам не хватает денег на покупки');
    };
    this.reset = function() {
        this.customerMoney = 0;
    };
}

/* Пример использования */
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);
// Проверям что посчитали
console.log(totalPrice); // 110
// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);
// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300
// Вызываем countChange для подсчета сдачи
const change = mango.countChange();
// Проверяем что нам вернул countChange
console.log(change); // 190

if (change !== null) {
    // При успешном обслуживании вызываем метод onSuccess
    mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
    // При неудачном обслуживании вызываем метод onError   
    mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0