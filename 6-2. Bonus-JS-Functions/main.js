const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num1, num2) {
    return num1 + num2;
};

function divide(num1, num2) {
    return num1 / num2;
}

const sum = add(3, 4);
console.log(sum);

// 함수도 object이다. 그래서 add라는 이름으로 메모리에 저장된다.
// 메모리의 add안에는 reference 주소값(함수르 가르키는)이 저장되어 있음.

const doSomething = add;
// 그래서 메모리에 저장된 doSomething 안에도 add의 reference(주소값)이 들어가게 됨.

const result3 = doSomething(2, 3);
// 마찬가지로 doSomething에 reference(주소값)이 할당 되어지는 것임.
console.log(result3);

function print(name, age) {
    console.log(`${name} ${age} print`);
};

print(8, 33);

function surprise(callback) {
    const result = callback(2, 3);
    // 그래서 add를 수행하는 것과 동일함.
    console.log(result);
}

surprise(add);
surprise(divide);
// add라는 변수가 add 함수를 주소값으로 가르키고 있음.
// 함수도 object이기 때문에 add라는 변수 값에는 add 함수를 가르키는
// reference 값이 단순히 저장되어져 있음.
// 즉 surprise에 add 변수 안에 들어있는 add 함수의 reference(주소값) 전달.

