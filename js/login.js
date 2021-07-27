const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting")

function loginSubmitOn(e){
    e.preventDefault();//addEventListener의 첫번쨰 인자에 있는 함수이며 이벤트 동작을 막는다
    const username = loginInput.value; //변수에 저장
    loginForm.classList.add("hidden");//form없애기
    greeting.innerText = `Hello ${username}`;//h1에 이름 넣기
    greeting.classList.remove("hidden");//h1의 hidden class제거
}

loginForm.addEventListener("submit",loginSubmitOn);//submit이벤트는 form만 쓸수 있는 이벤트이다 



