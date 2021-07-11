//3.1,2복습겸 3.3 example로 다 공부
 /*   let objA = {
        val: 40,
    };//objA가 가리키고 있는 객체 = objA객체
    let objB = objA;

    console.log(objA);//40
    console.log(objB);//40

    objB.val = 50;//updating

    console.log(objB.val);//50
    console.log(objA.val);//50
    console.log(objA["val"]);//50
    //60 으로 바꾸는 방법 objB가 let이지만 10을 추가하는 방법으로 함
        objB.val = objB.val + 10;
        console.log(objB["val"]);//60
    //프로퍼티 추가
        objB.name = "hi";
        console.log(objB);//{val: 60, name: "hi"}
*/
//3.3.1 객체 비교
    //두 객체를 비교할떄 객체 자체를 비교하지 값을 비교하지 않는다
    /*const a = 10;
    const b = 10;

     objA = {value:10};
     objB = {value:10};
    let objC = objB;

    console.log(a==b);//true    
    console.log(objA==objB);//false
    console.log(objB==objC);//true
*/
//3.3.2 참조에의한 함수 호출 방식  
    //함수 안에서 선언한것음 함수 안 에서만 적용됨
    // 함수 밖에서 선언한것은 함수 안 에서도 적용됨 =>값에서 적용됨
    //객체는 인자로 쓰여서 갱신되면 객체 고유의 내용도 갱신됨
    const a = 10;
    const objA = {value:10};
    const b = 11;
    
    const changeArg = (num,obj) => {
        num = 200;
        obj.value = 200;
        console.log(num);//200
        console.log(obj.value);//200
        console.log(b);//11
    };
    changeArg(a,objA);//200,200,11

    console.log(a);//10
    console.log(objA.value);//200



