const a = 10; 
const b = 2;
const veryLongVariable = "hi" ; //camelcase라함

console.log(a+b);
console.log(a*b);
console.log(a/b);
//variable은 값을 저장하거나 유지하는 역할을 함
//변수는 공백이 없으므로 글자가 달라지는 지점에서 대문자를 써야ㅐ함
console.log("hello"+veryLongVariable);
//const let
//const = constant cannot change
//upadating variable 할떄 새로운 변수를 생성할떄만 let을 쓰고 updating할떄는 let을 안쓰고 변수만 쓴다
//js는 위에서 아래로 실행
let myName = "han"
console.log(myName);//han
myName = "kim"
console.log(myName);//kim

const myName = "han"
console.log(myName);//han
myName = "kim"
console.log(myName);//새로운 값을 대입 할 수 없다고 나옴
// Identifier 'myName' has already been declared
//use const by default and use let to upadte
//var을 쓸수는 있지만 만약 우리가 실수를 하더라도 var로는 찾을수 없고 const  let으로는 알수 있다.  값을 바꾸는 실수 말인거다
//기본적으로 const 를 쓰고 필요할떄만 let을쓰되 ,var은 쓰지 말것


