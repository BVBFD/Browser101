'use strict'

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        })
    }

    setClickListener(onClick) {
        this.onClick = onClick;
        // 전달받은 함수를 pupUp 클래스 안의 onClick으로 할당해주는 것임.
    }
    // popUp에서 btn이 click이 되어지면 내가 전달해 준 이 onClick이라는 
    // 콜백을 호출해..

    showWithText(text){
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide'); 
    }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}