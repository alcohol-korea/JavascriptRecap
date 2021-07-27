const loginForm = document.querySelector("#js-login");
const loginInput = document.querySelector("#js-login input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function loginSubmitOn(e){
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN);
    paintGreeting(username);
}

function paintGreeting(value){
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hello ${value}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",loginSubmitOn);
}else{
    paintGreeting(savedUsername);
}






