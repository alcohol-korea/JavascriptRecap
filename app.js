// object안에 function을 만들어서 calculator 객체를 만든다
const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    division: function(a,b){
        console.log(a/b);
    },
    squared: function(a,b){
        console.log(a**b);
    },
};
calculator.add(1,2);
calculator.minus(1,2);
calculator.division(1,2);
calculator.squared(2,2);
console.log(calculator);