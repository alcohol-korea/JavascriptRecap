//3.5
    //배열의 length
        //배열 length구하기
        let arr = [];
        console.log(arr.length);//0

        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 2;
        arr[100] = 100;
        console.log(arr.length);//101
        //but 실제 메모리는 100만틈 할당 되지 않고 
        //있는 인덱스 만큼 할당 된다

        //length 변경
        const array = [0,1,2];
        console.log(array.length);//3

        array.length =  5;
        console.log(array);//[0, 1, 2, empty × 2]

        array.length = 2;
        console.log(array);//[0, 1]
        //length의 벗어나는 실제 값은 삭제된다
        //인덱스 2의 값 2가 삭제됨

        //배열의 표준 메서드는 length 프로퍼티를 사용
        //push()는 배열 끝에 추가하는 표준 배열 메서드

        let arrayA = ["a","b","c","d","e"];

        //push()메서드 추가
        arrayA.push("a");
        console.log(arrayA);//["a", "b", "c", "d", "e", "a"]

        //length 값 추가후 push()쓰기
        arrayA.length = 7;
        arrayA.push("a+");
        console.log(arrayA);//["a", "b", "c", "d", "e", "a", empty, "a+"]
    //배열 vs 객체  
        const colorsArray = ["red","blue"];
        console.log(colorsArray[0]);//red
        console.log(colorsArray[1]);//blue

        const colorsObject = {
            "0" : "red",
            "1" : "blue",
        };
        console.log(colorsObject[0]);//red
        console.log(colorsObject[1]);//blue

        // type of 연산자
        console.log(typeof colorsArray, typeof colorsObject);//object object

        //length 프로퍼티
        console.log(colorsArray.length, colorsObject.length);//2 undefined

        //배열 표준 메서드 pusj()
        colorsArray.push("yellow");
       // colorsObject.push("yellow"); => 에러뜸
        console.log(colorsArray);//["red", "blue", "yellow"]

        //객체  __proto__ -> Object.prototype(객체의 부모)
        //배열  __proto__ -> (배열의 부모) Array.prototype  __proto__ ->(Array.prototype의 부모) Object.prototype 
        //따라서 배열은 둘의 메서드를 모두 가지고 있다

        //_proto_
        const emptyArray = [];
        const emptyObject = {};

        console.dir(emptyArray.__proto__);//ar;ray꺼에 + __proto__: object
        console.dir(emptyObject.__proto__);//__proto__: object만 
    //배열의 프로퍼티 추가
        //배열에 프로퍼티 추가 가능 
        //배열도 객체 이므로 프로퍼티 생성가능 
        //하지만, 배열과 객체는 따로따로이므로 
        //배열의 가장큰 인덱스가 변하지 않는한 
        //배열의 length의 크기는 변하지 않음
        //배열도 객체처럼 "key: value"형태로 있음
    //배열 나열 프로퍼티 있을 경우
        let proof = ["zero","one","two"];
        proof.color = "mustade";
        proof.name = "fuckking proof";
        console.log(proof);
        //for in 문 은 불필요한 프로퍼티 출력
            let p;
            for(p in proof){
                console.log(p,proof[p]);
            };//0 zero 1 one 2 two color mustade name fuckking proof
        //for문 사용
             let i;
            for(i=0;i<proof.length;i++){
                console.log(i,proof[i]);
            };//0 "zero" 1 "one" 2 "two"
    //배열 요소 삭제
        //delete연산자 사용
        //배열요소만 지워지고 undefnied로 지워진 인덱스가 채워짐

        //splice( start, deleteCount, item) 배열 메서드
            //start 가 배열 위치
            //deleteCount가 start에서 지정한 시작 위치부터 삭제할 요소의 수
            //item은 삭제할 위치에 추가할 요소
            let v = ["x","y","z"];
            v.splice(0,1,"v");
            console.log(v);//["v", "y", "z"]
            //x삭제됨 "v"로 바꿈
            console.log(v.length);//2

    //Array생성자 함수
        //생성자 함수는 반드시 new연산자와 함꼐 있어야한다
        //호출된 인자가 1개이면 인자 만큼의 length를 가진 빈배열을 가진다
            let j = new Array(3);
            console.log(j);//[undefnied,undefnied,undefnied]
            console.log(j.length);//3
        //1개 이상일떄는 호출된 인자를 요소로 가지며 인자개수가 length가 된다.
            let k = new Array(1,2,3);
            console.log(k);//[1, 2, 3]
            console.log(k.length);//3

    //유사 배열 객체
        //유사 배열 객체도 배열 표준 메서드를 사용 가능 하다.
//3.6  기본타입으로 표준 메서드 쓰기
    //숫자 메서드 출력
        //toExponenetial(인자)로 몇번쨰 소수점자리까지 리턴 할건지 결정
        const g = 1;
        console.log(g.toExponential(2));//1.00e+0
        //toFixed 몇번쨰 자리에서 반올림
        //toPrecision() 몇개의 숫자를 반활한건지
    //문자열 메서드
        //charAt() 몇번쨰 글자를 반활 할건지
        console.log("hi".charAt(0));//h
        //indexOf는 뒤에서 몇번쨰 자리 문자를 반환 0부터 시작
        //substring(인수,인수) 문자열 나타냄 (시작,끝)

//3.7 연산자
    //+ 연산자 숫자는 더하기 문자열 연결 연산도 됨
        // 단, 띄어쓰기 없음
        let h = "hi";
        let l = "me";
        console.log(h+l);//hime

    //typeOf연산자 데이터 타입 볼수 있는 연산자
        //기억해야할 것 null은 object 배열도 object 함수는 function으로 나옴
     
    //== 동등 연산자 와 === 일치 연산자
        //== 동등 연산자는 타입을 변환후 같은지 봄
        //===일치 연산자는 타입 변환하지 않고 비교 완전 값이 같아야함
    //!!연산자 
        //불린값 반환
    //!는 아님을 뜻함 !true = false
