//3.2 객체
    /*
    객체는 이름(key값) : 값 (value값)
    기본타입은 값을 하나 가지지만 객체는 하나의 이름이 여러개의 값을 가짐
    객체의 프로퍼티 = 함수 = 객체의 메서드 임
    */

//3.2.1 객체 생성방법
    //3.2.1.1 생성자 함수 이용
        /*
        생성자 함수를 이용하려먼 new연산자와 함께 객체()를 하면된다.
        함수의 조건은 그냥 ()이 괄호만 붙이면 객체에서 함수로 변하므로 
        새로운 생성자 함수를 객체로 선언하려면
        new object()을 하면 된다  object= 객체
        */  
        //object()생성자함수를 통한 객체 생성
        var foo = new Object(); 
        //객체 메서드 선정
        foo.name = "foo";
        foo.age = "31";
        foo. gender = "female"; 
        console.log(typeof foo); //object
        console.log(foo); /*
        {name: "foo", age: "31", gender: "female"}
        age: "31"
        gender: "female"
        name: "foo"
        __proto__: Object
        */ //이런식으로 object가나오고 {}안에 있는것이 object이다.  
    //3.2.1.2객체 리터럴 방식
        /*
         객체 리터럴은 중괄호인 {}를 뜻한다
         안에 아무것도 없으면 빈객체이고 
         객체는 "이름"key값 : "값" value값 형식으로 저장된다 
         반드시 이름과 값 사이에는 :이 들어가야한다
        */  
        var foo = {
            name : "foo",
            age : "31",
            gender : "female",
        };

        console.log(typeof foo);//object
        console.log(foo);
         /*
        {name: "foo", age: "31", gender: "female"}
        age: "31"
        gender: "female"
        name: "foo"
        __proto__: Object
        */

    // 3.2.1.3 생성자 함수 이용 
        console.log("3.2.1 끝");

// 3.2.2 프로퍼티 갱신 읽기 쓰기
    var foo = {
        name : "foo",
        major : "engineering",
    };
        //property 읽기
            console.log(foo.name);//foo
            console.log(foo["name"]);//foo
            console.log(foo.nickname);//undefnied
        //property value값 갱신
            foo.name = "poo";
            console.log(foo.name);//poo
            console.log(foo["name"]);//poo
        //객체 property 추가
            //자바스크립트 객체의 property에 값을 할당할떄 프로퍼티가 이미 있을경우 해당 프로퍼티 값이 갱신되지만
            //객체의 해당 property가 없을 경우 새로운 property가 동적으로 생성한후 값이 할당된다
                foo.age = 30;
                console.log(foo.age);//30
        //대괄호 표기법 []
            //대괄호 표기법은 객체["객체의 프로퍼티"] 이다
            //예약어인 -(빼기 연산자)가 들어간 프로퍼티는 무조건 대괄호로 표기해야 한다 
                foo["full-name"] = "foo poo";
                console.log(foo["full-name"]);//foo poo
                console.log(foo.full-name);//NaN
                console.log(foo.full);//undefnied
        //NaN은 
            //사칙연산해서 정상적인 값이 아닐때 나옴
//3.2.3 for in문을 이용해서 객체 property 출력
    var foo = {
        name: "foo",
        age: 30,
        major : "engineering",
    };
        //for in 문을 이용한 객체 출력  for in은 객체 for each는 배열
            var result;
            for (result in foo)
            {
                console.log(result, foo[result]);
            }
            //배열처럼 객체들의 property를 나열해서 출력해준다
//3.2.4 객체 property 삭제 - delete연산자
    var foo={
        name: "foo",
        age:30
    };
    //delete연산자는 프로퍼티를 삭제 할 수 있다.
    console.log(foo.age);//30
    delete foo.age;
    console.log(foo.age);//undefnied
    //delete연산자는 객체 자체를 삭제 할 수 없다.
    delete foo;
    console.log(foo);
    //{name: "foo"}name: "foo"__proto__: Object


