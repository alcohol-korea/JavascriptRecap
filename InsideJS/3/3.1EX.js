//3.0 const let var차이점
/*
var : 재선언 재할당 모두 가능함
const: 재선언 재할당 모두 불가능 
let: 재할당 가능
*/

// 3.1
//number
var a=1; 
//string
var b="I'm happy";
//boolean
var c=true;
//undefnied
var d;
//null => object라 나옴
var e = null;

console.log(
    typeof a,
    typeof b,
    typeof c,
    typeof d, 
    typeof e,
    );//number string boolean undefined object

//3.1.1 모든 수는 다 실수로 취급한다
var num = 2.5

console.log(num);//2.5
console.log(Math.floor(num));//2

//3.1.2 문자열은 한번 생성되면 절대 바뀌지 않는다

var a= "happy";
console.log(a[0],a[1],a[2],a[3],a[4]);
//문자열 바꾸기가능함? =>안됨
a[0]="T";
console.log(a);//happy

//3.1.3 Boolean값 true OR false

var a= "true";
var b= "false";
console.log(a,b);

//3.1.4 null 과 undefnied 일치 연산자인 ===을 사용해야한다.

var nullVar = null ;

console.log(nullVar === null);//ture
console.log(typeof nullVar === null);//false
