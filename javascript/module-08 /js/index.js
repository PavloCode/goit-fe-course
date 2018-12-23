'use strict'
const galleryItems = [
    { preview: './css/image/1-320.jpeg', fullview: './css/image/1-1280.jpeg', alt: "alt text 1" },
    { preview: './css/image/2-320.jpeg', fullview: './css/image/2-1280.jpeg', alt: "alt text 2" },
    { preview: './css/image/3-320.jpeg', fullview: './css/image/3-1280.jpeg', alt: "alt text 3" },
    { preview: './css/image/4-320.jpeg', fullview: './css/image/4-1280.jpeg', alt: "alt text 4" },
];


const preview = document.querySelector('.js-preview');
const fullview = document.querySelector('.js-fullview');


function createItems(obj) {
    for (let item of obj) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.style.height = '220px';
        img.style.width = '320px';
        img.style.color = 'white';
        img.setAttribute('alt', item.alt);
        img.setAttribute('src', item.preview);
        img.setAttribute('fullview', item.fullview);
        preview.append(li);
        preview.append(img);
    }
    return obj;
}

createItems(galleryItems);

function createFullView(obj) {
    const img = document.createElement('img');
    img.setAttribute('src', obj[0].fullview);
    img.setAttribute('alt', obj[0].alt);
    img.classList = 'js-fullView';
    img.style.height = '420px';
    img.style.width = '600px';
    img.style.color = 'white';

    return fullview.append(img);
}

createFullView(galleryItems);

preview.addEventListener('click', choiceFn);

function choiceFn(event) {
    const image = document.querySelector('.js-fullView');
    const target = event.target;
    const value = target.getAttribute('fullview');
    image.setAttribute('src', value);
    image.setAttribute('alt', target.alt);
}