'use strict';

const carrotSound = new Audio('img/carrot/sound/carrot_pull.mp3');
const alertSound = new Audio('img/carrot/sound/alert.wav');
const bgSound = new Audio('img/carrot/sound/bg.mp3');
const bugSound = new Audio('img/carrot/sound/bug_pull.mp3');
const winSound = new Audio('img/carrot/sound/game_win.mp3');

export function playCarrot() {
    playSound(carrotSound);
}

export function playBug() {
    playSound(bugSound);
}

export function playAlert() {
    playSound(alertSound);
}

export function playWin() {
    playSound(winSound);
}

export function playBackground() {
    playSound(bgSound);
}

export function stopBackground() {
    stopSound(bgSound);
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}