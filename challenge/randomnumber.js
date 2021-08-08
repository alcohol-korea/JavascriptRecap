const title = document.querySelector(".range h2");
const range = document.getElementById("js-range");
const user = document.querySelector(".randomnumber");
const userInput = user.querySelector("label input");
const compareTitle = document.querySelector(".compare");
const resultTitle = document.querySelector(".result");

function handleRangeChange(e){
    const rangeSpan = title.querySelector("span");
    rangeSpan.innerHTML = range.value;
}

function handleRandomSubmit(e){
    e.preventDefault();
    compareTitle.classList.remove("hidden");
    resultTitle.classList.remove("hidden");
    const userNumber = parseInt(userInput.value,10);
    const max = range.value;
    const machineNumber = Math.ceil(Math.random()*max);
    if(userNumber === machineNumber)
    {
        compareTitle.innerText = `
        You chose:${userNumber},
        the machine chose: ${machineNumber}.`;
        resultTitle.innerText = "You won";
        resultTitle.classList.add("teal");
        resultTitle.classList.remove("tomato");
    }
    else
    {
        compareTitle.innerText = `
        You chose:${userNumber},
        the machine chose: ${machineNumber}.`;
        resultTitle.innerText = "You lost";
        resultTitle.classList.add("tomato");
        resultTitle.classList.remove("teal");
    }
}

user.addEventListener("submit",handleRandomSubmit);
range.addEventListener("input",handleRangeChange);

