'use strict'

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let startTime, deltaTime = 0;
let isActive = false;
let id;
let countPixel = 0;
let lapArray = [];

const tableView = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const reset = document.querySelector('.js-reset');
const lapBt = document.querySelector('.js-take-lap');
const laps = document.querySelector('.js-laps');

start.addEventListener('click', callbackStart);
reset.addEventListener('click', callbackReset);

start.addEventListener('click', setActiveBtn);
reset.addEventListener('click', setActiveBtn);
lapBt.addEventListener('click', setActiveBtn);


function callbackStart() {
    reset.disabled = false;
    if (!isActive) {
        startTime = Date.now() - deltaTime;
        id = setInterval(startTimer, 100);
        start.innerHTML = 'Pause';
        isActive = true;
    } else {
        start.innerHTML = 'Continue';
        clearInterval(id);
        isActive = false;
    }
}

function callbackReset() {
    console.log('reset');
    clearInterval(id);
    isActive = false;
    tableView.innerHTML = '00:00.0';
    deltaTime = 0;
    reset.disabled = true;
}

function startTimer() {
    deltaTime = new Date(Date.now() - startTime);

    minutes = deltaTime.getMinutes();
    seconds = deltaTime.getSeconds();
    miliseconds = Math.floor(deltaTime.getMilliseconds() / 100);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    tableView.innerHTML = minutes + ":" + seconds + "." + miliseconds;

}

function setActiveBtn(event) {
    const target = event.target;
    if (target.classList.contains('active')) {
        return;
    }
    start.classList.remove('active');
    reset.classList.remove('active');
    lapBt.classList.remove('active');
    target.classList.add('active');
}

lapBt.addEventListener('click', () => {
    callbackLap();
    lapArray.forEach(element => {
        laps.appendChild(element);
    });
});

function callbackLap() {
    const li = document.createElement('li');
    li.style.top = `${countPixel}px`;
    countPixel += 30;
    li.innerHTML = minutes + ":" + seconds + "." + miliseconds;

    return lapArray.push(li);
}