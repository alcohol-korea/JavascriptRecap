const loginForm = document.querySelector("#js-login");
const loginInput =  document.querySelector("#js-login input");
const greeting = document.querySelector("#greeting");

const USERNAME_LS = "username";

function loginSubmitOn(e){
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    paintGreeting(username);
    localStorage.setItem(USERNAME_LS,username);
}

function paintGreeting(userName){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${userName}`;
}

const savedUsername = localStorage.getItem(USERNAME_LS);

if(savedUsername === null){
    greeting.classList.add("hidden")
    loginForm.classList.remove("hidden");
}else{paintGreeting(savedUsername);}//else를 무조건 써야함 함수안에서는 안써도됨


loginForm.addEventListener("submit",loginSubmitOn);//loginForm이어야 submit도 포함되서 submit이됨







