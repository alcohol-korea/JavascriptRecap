console.log(4.2);//4.2
console.log("4.2.1");//4.2.1 
//함수도 객체다
function add(x,y){
    return x+y;
};
add.result = add(2,3);
add.status = "ok";

console.log(add.result);//5
console.log(add.status,"함수는 [[code]] 내부 프로퍼티에 저장되고 나머지는 각자의 프로퍼티에 저장된다");//ok

console.log(
    "4.2.2",
    "함수를 값으로 취급",
    "릴터럴에 의해 생성",
    "변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능",
    "함수의 인자로 전달 가능",
    "함수의 리턴값으로 리턴 가능",
    "동적으로 프로퍼티를 생성및 할당 가능",
    "이것이 모두 가능하면 일급 객체임");

console.log("4.2.2.1","변수나 프로퍼티의 값으로 할당");

const a=100;
const b=function () {
    return 100;    
};
console.log("변수값으로 할당",b());

const c = {};
c.d = function () {
   return 200; 
};
console.log("프로퍼티값으로 할당",c.d());

console.log("4.2.2.2","함수를 인자로 전달");

const foo = function (func) {
    func();
};
foo(function () {
    console.log("this fuction can be used as the argument.");
});

console.log("4.2.2.3","리턴값으로 활용 함수자체가 리턴됨");
const fooo = function () {
    return function () {
        console.log("this function is the return value.");
    };
};

const bar = fooo();
bar();

console.log("4.2.3","함수객체만의 프로퍼티가 있음 length와 prototype임");//4.2.3
function minus(x,y){
    return x-y;
};
console.dir(minus);
console.log(
    "arguments: 인자값",
    "caller: 자신을 호출한 함수",
    "name: 함수 이름",
    "fucttion의 [[prototype]]은 =>fucntion.[[prototype]]라하고 __proto__:f()이다",
    "function.[[prototype]]의 prtototype은 object.[[prototype]]이며 __proto__: object로 쓰인다"
    );
console.log("4.2.3.1","length프로퍼티는 인자의 개수이다")
console.log("4.2.3.2", "함수의 prototype 프로퍼티는 함수.prototype의 프로퍼티인 constructor프로퍼티를 가리키고 이것 또한 자신과 연결된 함수를 가리킨다")
function myFuction(){
    return true;
};
console.dir(myFuction);
console.log(myFuction.prototype);
console.log(myFuction.prototype.constructor);
