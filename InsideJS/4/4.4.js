console.log(4.4,);
console.log("4.4.1 argument 객체")
    function func (arg1,arg2){
        console.log(arg1,arg2);
    }
    func();
    func(1);
    func(1,2);
    func(1,2,3);

    function add(a,b){
        console.dir(arguments);
        return a+b;
    }
    console.log("유사배열 객체임")
    console.log(add(1),"NAN");
    console.log(add(1,2),3);
    console.log(add(1,2,3),3);
    console.log("함수 호출할떄 넘겨진 인자: 첫번쨰는 인덱스가 0 그다음 1,2,...")
    console.log("length프로퍼티: 호출할떄 넘겨진 인자의 개수")
    console.log("callee프로퍼티: 현재실행중인 함수의 참조값")
    console.log("인자 개수에 따라 다른처리하는 함수에 적함")
    function sum(){
        let result = 0;
        let i;
        for(i=0;i<arguments.length; i++){
            result += arguments[i];
        }
        return result;
    }
    console.log(sum(1,2,3,4));
    console.log(sum(1,7,6,8));
    console.log("i가 인자의 객체수에 따라 멈추는 반복문이며 arguments의 인덱스는 항상 0부터 시작하므로 실행이 되는 것이다.")
console.log("4.4.2 호출 패턴과 this바인딩");
    console.log("객체 메서드","함수","생성자 함수","call과 apply메서드");
    console.log("1. 객체 메서드","해당 메서드를 호출한 객체가 this가 됨")
        const myObj = {
            name: "mine",
            sayName: function(){
                console.log(this.name);
            },
        };
        const otherObj = {
            name: "others",
        };
        otherObj.sayName = myObj.sayName;
        myObj.sayName();
        otherObj.sayName();
    console.log("2. 함수","전역객체가 되는 경우이며 전역객체는 window객체이다.")
        var value = 100;

        var obj = {
            value : 1,
            func1: function(){
                this.value += 1;
                console.log(this.vlaue);
                func2 = function(){
                    this.value += 1;
                    console.log(this.vlaue);
                    func3 = function () {
                        this.value += 1 ;
                        console.log(this.value);
                    }
                    func3();
                }
                func2();                
            },
        };
        obj.func1();
        console.log("strict모드에서는 this가 undefnied가 된다", "내부함수호출시 부모함수에 this를 다른변수로 선언하지 않으면, this가 전역변수를 받는다.")
    console.log("3. 생성자 함수",)
            const Person = function (name){
                this.name =name ;
            };
            const foo = new Person("foo");
            console.log(foo.name);
            console.log("생성자 함수 실행전에 빈 객체(함수)를 실행시킨다.");
            console.log("빈객체라 하더라도 자신의 프로토타입 객체로 설정하였기 때문에 this는 함수 본인이 바인딩 된다");
            console.log("함수의 프로퍼티를 this를통해 만든다");
            console.log("특벽하게 리턴문이 없다면 this로 바인딩된 새로 생성한 객체가 리턴된다. = 추가한 프로퍼티 값이 리턴된다.");
        console.log("객체 리터럴 방식과 함수를 통한 객체 생성 방식의 차이")
            const literalObj = {
                name: "literal",
                age: 20,
                gender: "man",
            };
            console.dir(literalObj);

            function Constuctor(name,age,gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }

            const bar = new Constuctor("bar",23,"man");
            console.dir(bar,"함수 Constructor은 함수이고 원래 constructor의 기능은 자신과 연결된 함수를 보여준다.");
            const panna = new Constuctor("panna",20,"woman");
            console.dir(panna,"bar이나 panna는 인스턴스이다");
            console.log("__proto__프로퍼티가 리터럴은 object와 생성자 함수는 Constructor으로 다르다 ");
            console.log(
                "이유는 객체는 자신을 생성한 생성자 함수의 protorype프로퍼티를 가리키는 객체가 자신의 프로토타입 객체로 설정한다.",
                "따라서 객체 리터럴 방식에서는  생성자 함수가 object()이고 생성자함수는 생성자한수 자체이다."); 
        console.log("생성자 함수를 new를 쓰지 않고 호출할 경우");
            console.log("일반 함수는 this가 window를 의미하지만 생성자 함수는 this가 생성자 함수 자체가 된다.");
            console.log("따라서 생성자 함수는 선언할떄 첫 문자를 대문자로 한다.");
            console.log("만약 하지 않았을 경우를 대비해서 만든 함수가 있다 ");
            console.log("생성자 함수는 자신을 prototype프로퍼티로 갖는 것을 이용해서 함수를 할당한 변수에 생성자함수가 있는지를 판별한다. ")
                console.log("인스턴스는 생성자 함수를 변수에 할당한것이다 그변수를 인스턴스라 한다.");
                function A(arg){
                    if(!(this instanceof A))
                        return new A(arg);
                        this.value = arg ? arg : 0;
                }
                console.log("따라서 new를 붙이지 않아도 new를 실행 함수에서 붙이도록 한다.")
    console.log("call과 apply메서드");
        console.log("apply(빈 배열 객체,인자의 값으로 구성된 객체 배열)");        
            function App(name,age,gender){
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
            const poo = {};
            App.apply(poo,["poo",30,"man"]);
            console.dir(poo);
        console.log("call(빈배열 객체,인자 하나하나의 값)");   
            App.call(poo,"poo",30,"man");
            console.dir(poo);
        
                
