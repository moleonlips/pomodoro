import { IntervalTimer } from "./timer.js"
import { FormHandler } from "./handler/form.handler.js"
import { FileHandle } from "./handler/file.handler.js";

let formH = new FormHandler();

let render = new FileHandle()
render.readAndRender('./../data.json');

formH.formSubmit();

let counting_second = 50
let counting_minute = 0
let currentTranslate = -100
let isPause = false;

const second = document.querySelector('#second')
const minute = document.querySelector('#minute')

second.textContent = String(counting_second).length < 2 ? `0${counting_second}` : `${counting_second}`
minute.textContent = String(counting_minute).length < 2 ? `0${counting_minute}` : `${counting_minute}`

const totalRoad = document.querySelector('.timeline-full').clientWidth
const totalTime = counting_minute * 60 + counting_second
const translatePerSecond = ((totalRoad / totalTime) / (totalRoad / 100))

const runnedRoad = document.querySelector('.timeline-run')

const btnStart = document.querySelector('.btn-start');
const btnResume = document.querySelector('.btn-resume');
const btnPause = document.querySelector('.btn-pause');


const processing = function () {
    if (currentTranslate < 0) {
        runnedRoad.style.transform = `translateX(${Number(currentTranslate).toFixed(4)}%)`
        currentTranslate += translatePerSecond
    }
    else {
        runnedRoad.style.transform = `translateX(0)`;
        timerCounting.clear();
        timerProcessing.clear();
        
        // Reset UI
        btnStart.classList.add('active');
        btnPause.classList.contains('active')? btnPause.classList.remove('active'): null;
        btnResume.classList.contains('active')? btnResume.classList.remove('active'): null;
    }
}

const counting = function () {
    let counting_second_display = Math.round(counting_second / 1)
    let counting_minute_display = Math.round(counting_minute / 1)

    second.textContent = String(counting_second_display).length < 2 ? `0${counting_second_display}` : `${counting_second_display}`
    minute.textContent = String(counting_minute_display).length < 2 ? `0${counting_minute_display}` : `${counting_minute_display}`

    if (counting_minute + counting_second !== 0) {
        if (counting_second > 0) {
            counting_second--
        }
        else {
            if (counting_minute > 0) {
                counting_minute--
                counting_second = 59
            }
        }
    }
}

var timerCounting = new IntervalTimer(counting, 1000)
var timerProcessing = new IntervalTimer(processing, 1000)


btnStart.addEventListener('click', () => {
    btnPause.classList.add('active');
    btnStart.classList.remove('active');

    timerCounting.start();
    timerProcessing.start();
})


btnResume.addEventListener('click', () => {
    
    btnResume.classList.remove('active');
    btnPause.classList.add('active');

    isPause = !isPause;

    if (isPause) {
        timerCounting.pause();
        timerProcessing.pause();
    }
    else {
        timerCounting.resume();
        timerProcessing.resume();
    }
})

btnPause.addEventListener('click', () => {
    btnResume.classList.add('active');
    btnPause.classList.remove('active');

    isPause = !isPause;

    if (isPause) {
        timerCounting.pause();
        timerProcessing.pause();
    }
    else {
        timerCounting.resume();
        timerProcessing.resume();
    }
})



