// number, string, boolean, null, undefined.
// 이렇게 담을 수 있는 가장 작은 단위의 데이터를 primitive data type.
// primitive data type을 제외한 모든 아이들을 object라고 함.
// object란 최소한 한 두가지의 다양한 데이터를 한군데다 묶어 놓은 아이다.
// (배열, 리스트, 함수)
// object는 한 두가지 이상의 큰 데이터가 들어있기 때문에 우리가 단순히 변수를 
// 선언하는 곳에 다 담을수 없음. (너무 뚱뚱함)
// 개네들은 그들만의 공간에 있고, 

let number = 2;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
// object는 주소값인 reference가 있음. 
// name, age를 묶어서 가리키고 있는 reference 주소 값이 있는데
// 그 주소만 obj라는 변수에 할당되는 것임.  
let obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

// obj2라는 새로운 메모리 변수 공간이 생기고 obj가 가지고 있는 reference 주소값이
// 복사되어 obj2에 넣어짐.
let obj2 = obj;
console.log(obj2.name);

// primitive type 변수는 작은 단위이기 때문에 그 데이터 자체가 메모리의 변수공간에
// 저장되지만 object는 다양한 단위의 데이터가 들어가기 때문에 주소값이 저장됨.

obj.name = 'james';
console.log(`-----------`);
console.log(obj.name);
console.log(obj2.name);

const obj = {
    name: 'ellie',
    age: 5,
};
// const를 정의를 한번하게 되면 절대로 그 값은 변경 불가능하지만
// object는 그 안 reference 주소 값이 변경 되는 것이 아니기 때문에
// obj.name = 'James'; 이런 식으로 변경가능
// const obj = {
//     name: 'James',
//     age: 5,
// };
// 하지만 이런식으로 오브젝트 자체를 변경할시 에러 발생