/*function sayHello(){
    let i;
    const name = ["Flynn","Melon","Strawberry"];
    for(i=0;i<name.length;i++){alert(`Hi my name is ${name[i]}`);}
}
sayHello();

function hi(name){
    console.log(name);
}
hi("mei");*/
const foo = function(a){
    a();
}

foo(function(){
    console.log("hi");
});

const b = function () {
    return function () {
        console.log("hi");
    };
}
const c = b();
c();