'use strict'
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [{
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

function createPostCard(element) {

    let movie__image, movie__title, movie__description, movie__rating;

    movie__image = document.createElement('img');
    movie__image.classList.add('movie__image');
    movie__image.setAttribute('src', element.img);

    movie__title = document.createElement('h1');
    movie__title.classList.add('movie__title');
    movie__title.textContent = element.title;

    movie__description = document.createElement('p');
    movie__description.classList.add('movie__description');
    movie__description.textContent = element.text;

    movie__rating = document.createElement('p');
    movie__rating.classList.add('movie__rating');
    movie__rating.textContent = element.link;


    return {
        movie__image,
        movie__title,
        movie__description,
        movie__rating,
    };

};

function createCards(posts) {
    const movie = document.querySelector('.movie');
    let obj;
    for (let element of posts) {
        obj = createPostCard(element);
        console.log(obj);
        movie.append(obj.movie__image, obj.movie__title, obj.movie__description, obj.movie__rating);
    }
    return obj;
};

createCards(posts);