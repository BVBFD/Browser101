'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameScore = document.querySelector('.game__score');
const gameTimer = document.querySelector('.game__timer');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('img/carrot/sound/carrot_pull.mp3');
const alertSound = new Audio('img/carrot/sound/alert.wav');
const bgSound = new Audio('img/carrot/sound/bg.mp3');
const bugSound = new Audio('img/carrot/sound/bug_pull.mp3');
const winSound = new Audio('img/carrot/sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

field.addEventListener('click', onFieldClick);
gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    } else {
        startGame();
    }
});

popUpRefresh.addEventListener('click', ()=>{
    startGame();
    hidePopUp();
});

function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPLAY?');
    // 이렇게 함수 단위로 정의하면서 하나 하나씩 매꿔가면서 코딩해나가면 됨!
    playSound(alertSound);
    stopSound(bgSound);
}

function startGame(){
    score = 0;
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}

function finishGame(win){
    started = false;
    hideGameButton();
    if(win){
        playSound(winSound);
    } else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win ? `You Won` : `Hut~~!! You are loser!`);
}

function showStopButton(){
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
};

function hideGameButton(){
    gameBtn.style.visibility = 'hidden';
};

function showTimerAndScore(){
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer(){
    clearInterval(timer);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`
}

function showPopUpWithText(text){
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide'); 
}

function hidePopUp(){
    popUp.classList.add('pop-up--hide');
}


function initGame(){
    field.innerHTML = "";
    gameScore.innerText = CARROT_COUNT;
    // 벌레와 당근을 생선한뒤 field에 추가해줌
    addItem('carrot', CARROT_COUNT, 'img/carrot/img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/carrot/img/bug.png');
}

function onFieldClick(event) {
    if(!started){
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')){
        // 당근!!
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if(score === CARROT_COUNT){
            finishGame(true);
        }
    } else if(target.matches('.bug')){
        // 벌레!!
        finishGame(false);
    }
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}

function updateScoreBoard(){
    gameScore.innerText = CARROT_COUNT - score;
}

function addItem(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for(let i = 0 ; i < count ; i++){
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min; 
}

initGame();