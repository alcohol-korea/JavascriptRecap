//프로토타입
//모든 객체는 자신의 부모역할을 하는 객체와 연결됨
//이러한 부모 객체를 포로토타입 객체라 함
//프로토타입 객체는 기본 내장 매서드가 존재하여 객체는 프로토타입 객체의 매서드를 사용 가능
const a = {
    name : "foo",
    age : 30,
};

console.log(a.toString());//[object Object] toString()은 object를 반환하는 객체임
console.dir(a);//Objectage: 30name: "foo"
//__proto__: Object 이것이  바로 프로토타입 객체의 부모임
