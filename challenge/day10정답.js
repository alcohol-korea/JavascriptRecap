//rangepart
const title = document.querySelector(".js-title");
const range = document.getElementById("js-range");
const guess = document.getElementById("js-guess");
const result = document.getElementById("js-result");

function handleRangeChange(e){
    const selectedRange = title.querySelector("span");
    selectedRange.innerHTML = range.value;
}
//guess part

function handleGuessSubmit(e){
    e.preventDefault();
    const guessInput = guess.querySelector("input");//틀림
    if(guessInput===""){
        return;
    }
    const max = range.value;
    const machineNum = Math.ceil(Math.random()*max);
    const userNumber = parseInt(guessInput.value,10);//틀림
    const resultSpan = result.querySelector("span");
    resultSpan.innerHTML = `
    You chose: ${userNumber},
    the machine chose: ${machineNum}. <br/>
    <strong>${userNumber===machineNum?"You won":"You lost"}</strong>
    `;
}

guess.addEventListener("submit",handleGuessSubmit);
range.addEventListener("input",handleRangeChange);