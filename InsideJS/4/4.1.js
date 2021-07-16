 //4.1
 console.log(4.1);   
    //4.1.2함수 선언
    console.log("4.1.2","함수 선언");
    function add(x,y){
        return x+y;
    }//함수 리털럴표시와 함수선언은 반드시 함수명이 정의 되어야함
    console.log(add(3,4));
    //4.1.3함수 표현식
    console.log("4.1.3","함수 표현식");
    const add2 = function (x,y) {
        return x+y;
    };//youtube clone에서 많이 쓰일 예정
    let plus = add2;
    console.log(plus(3,4));
    console.log(add2(3,4));
    //기명함수의 재귀적 호출 
    //팩토리얼 함수
    const factorialVar = function  factourial(n) {
        if(n<=1){
            return 1;
        }
        return n*factourial(n-1);
    };
    console.log(factorialVar(5));
    //console.log(factorial(3));//factorial is not defined
    //세미콜론은 무조건 찍어야한다.//4.1.4
    console.log("4.1.4","생성자 함수");
    console.log("new Fuction('인자1','인자2',.....,'인자n', 'fuctionBody')","모두 ''를 넣어서 쓴다 ");
    const add3 = new Function("x","y","return x+y");
    console.log(add3(3,8));
    //4.1.5 함수 호이스팅
    console.log("4.1.5","함수 호이스팅","함수선언의 위치와 관계없이 함수범위 안에만 있으면 함수호출이 가능하다");
    console.log(add4(2,3));
    function add4(x,y) {
        return x+y;    
    };

    //add5(2,3)//Cannot access 'add5' before initialization 선언문 전에 있다는뜻
    const add5 = function (x,y) {
        return x+y;
    };
    console.log(add5(2,3));