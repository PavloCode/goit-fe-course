'use strict'
class Hamburger {

    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    get size() {
        return this._size;
    }
    get stuffing() {
        return this._stuffing;
    }
    get toppings() {
        return this._toppings;
    }


    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            this._toppings.push(topping);
        } else {
            console.log('Такая добавка уже есть');
        }
    };
    removeTopping(topping) {
        if (this._toppings.includes(topping)) {
            const index = this._toppings.indexOf(topping);
            this._toppings.splice(this._toppings[index], 1);
        } else {
            console.log('Такой добавки не было');
        }
    };

    calculatePrice() {
        let normalPrice = Hamburger.SIZES[[this._size]].price + Hamburger.STUFFINGS[[this._stuffing]].price;
        if (this._toppings.length !== 0) {
            let additionalPrice = this._toppings.reduce((acc, val) => acc + Hamburger.TOPPINGS[[val]].price, 0);
            normalPrice += additionalPrice;
        }
        return normalPrice;
    };

    calculateCalories() {
        let calories = Hamburger.SIZES[[this._size]].calories + Hamburger.STUFFINGS[[this._stuffing]].calories;
        if (this._toppings.length !== 0) {
            let additionalCalories = this._toppings.reduce((acc, val) => acc + Hamburger.TOPPINGS[[val]].calories, 0);
            calories += additionalCalories;
        }
        return calories;
    };
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 60,
    },
};
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 15,
        calories: 10,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 15,
        calories: 50,
    },
};
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 10,
        calories: 0,
    },

};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1