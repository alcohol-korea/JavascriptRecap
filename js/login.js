const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginButtonClickOn(e){
    const username = loginInput.value;
    if(username === ""){
        alert("you have to write your name");
        return;
    }else if(username.length>8){
        alert("name is too long");
        return;
    }
    return console.log("hello",username);
}

loginButton.addEventListener("click",loginButtonClickOn);

