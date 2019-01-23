/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/


const laptops = [{
        size: 13,
        color: 'white',
        price: 28000,
        release_date: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        release_date: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        release_date: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        release_date: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        release_date: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        release_date: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        release_date: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        release_date: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        release_date: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];

const form = document.querySelector('.js-form');
const clearBt = document.querySelector('.reset');
form.addEventListener('submit', handleFormSubmit);

// form submit
function handleFormSubmit(evt) {
    evt.preventDefault();
    //clear user filter
    const filter = { size: [], color: [], release_date: [] };
    //clear cart
    clearHtml();
    const inputs = Array.from(form.querySelectorAll('input'));
    const results = inputs.reduce((acc, val) => {
        if (val.checked) {
            if (Number(val.value)) {
                acc[val.name] = val.value;
                filter[val.name].push(Number(val.value));
            } else {
                acc[val.name] = val.value;
                filter[val.name].push(val.value);
            }
        }
        return acc;
    }, {});
    //comparison and get dates
    const res = check(filter);
    // render
    renderHtml(res);
}
// button - clear
clearBt.addEventListener('click', function(e) {
    e.preventDefault();
    clearHtml();
    clearCheckBox();
});

// comparison user array with laptops dates
// get items
function check(fil) {
    let res = laptops;
    for (const key in fil) {
        if (fil[key].length > 0) {
            res = res.filter(item => {
                if (fil[key].includes(item[key])) {
                    return item;
                }
            });
        }
    }
    return res;
}
// render cart
function renderHtml(obj) {
    const list = document.querySelector('.products-container');
    const source = document.querySelector('#products-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markcup = template(obj);
    list.insertAdjacentHTML('afterbegin', markcup);
    // clearCheckBox();
}
//clear cards of goods
function clearHtml() {
    const list = document.querySelector('.products-container');
    list.innerHTML = '';
}
// clear check-box
function clearCheckBox() {
    const inputs = Array.from(form.querySelectorAll('input'));
    for (let el of inputs) {
        el.checked = false;
    }
}