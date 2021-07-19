console.log(
    "목차",
    "4.3.1: 콜백함수",
    "4.3.2: 즉시실행 함수",
    "4.3.3: 내부함수",
    "4.3.4: 리턴하는 함수"
    );
console.log(
    "4.3.1: 콜백함수",
    "frontend쪽으로 event를 다루는 함수인 eventHandler들이 주로 콜백함수가 된다");

const button = document.querySelector("button");

function handleClick(event) {
    console.log("this click is for callback fuction");
};

button.addEventListener("click",handleClick);

console.log("4.3.2: 즉시실행 함수","초기화하는 코드에서 사용한다")

console.log(
    "4.3.3: 내부함수",
    "함수 내부에 정의된 함수임",);

function parent(){
    const a = 10;
    const b = 20;
    function child() {
        const b = 30;
        console.log(a);
        console.log(b);
    };
    child();
};
parent();
//child();//error
console.log(    
    "내부함수 특징",
    "1. 내부함수는 부모함수의 변수에 접근할수 있다",
    "2. 내부함수는 부모함수에서만 실행된다.=> 함수 스코프(범위)를 의미한다");

function p() {
    const a = 100;
    const c = function () {
        console.log(a);        
    };
    return c;
};
const v = p();
v();
console.dir(v);
console.log("v같은 부모함수 스코프의 변수를 참조하는 함수를 클로저라 한다 클로저는 5장에서 배울것이다.");
console.log("4.3.4: 리턴하는 함수");    
let self = function () {
   console.log("a");
   return function(){
       console.log("b");
   }; 
};
console.log(self);
self = self();
console.log(self);
console.log(
    "self함수 변수는 self함수가 호출되어 a를 호출하고 리턴값을 받는다,",
    "리턴값은 b를 다실 실행시키는 함수이고 따라서 b가 나온다."
    );