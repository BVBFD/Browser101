class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
        // 클래스 외부에서 콜백함수를 받고...
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
        }
    }
}
function printSomething(num) {
    // 클래스 내부에서 num이라는 counter 자료를 받고..
    console.log(`Wow! ${num}`);
};
function alertNum(num) {
    alert(`Wow! ${num}`);
};

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// class를 하나의 완전히 다 만들어진 클래스로 만들기 보다는
// 콜백함수를 통해서 레고처럼 조립할수 있는 클래스로 만들면 
// class 재사용률, 재조립률이 높아짐.

// 결국 클래스 내부, 외부에서 자료를 주고 받고 간편하게 만드는게 핵심.
