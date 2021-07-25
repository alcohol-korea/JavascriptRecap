const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");

function loginSubmitOn(info){
    info.preventDefault();//addEventListener의 함수이며 이벤트 동작을 막는다
    console.log(info);
}

function handleClicked(event){
    alert("hello!")
    console.log(event);
}

loginForm.addEventListener("submit",loginSubmitOn);//submit이벤트는 form만 쓸수 있는 이벤트이다 
link.addEventListener("click",handleClicked);


