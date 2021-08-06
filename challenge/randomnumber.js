const gameTitle = document.querySelector("h2");
const range = document.querySelector(".range input");
const numberForm = document.querySelector(".randomnumber");
const number = document.querySelector(".randomnumber label input");
const resultTitle = document.querySelector(".result");
const compareTitle = document.querySelector(".compare");

function handleRandomNumber(e){
    e.preventDefault();    
    compareTitle.classList.remove("hidden");
    resultTitle.classList.remove("hidden");
    startGame();
}

function rangeMaxNumber(e){
    e.preventDefault();
    const rangeInput = range.value;
    gameTitle.innerText = `Genrate a number between 0 and ${rangeInput}`;

}

function machineChoosing(){
    const rangeInput = range.value;
    const machineNumber =  Math.ceil(Math.random()*rangeInput);
    return machineNumber;
}

function startGame(){
    const userNumber = parseInt(number.value,10);
    if(userNumber === ""){
        return;
    }
    const  machineNumber = machineChoosing();
    console.log( userNumber, machineNumber );
    if(userNumber === machineNumber)
    {
        compareTitle.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}.`;
        resultTitle.innerText = "You win!";
        resultTitle.classList.add("teal");
        resultTitle.classList.remove("tomato");
    }
    else
    {
        compareTitle.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}.`;
        resultTitle.innerText = "You lost!";
        resultTitle.classList.add("tomato");
        resultTitle.classList.remove("teal");
    }
}
numberForm.addEventListener("submit",handleRandomNumber);
range.addEventListener("change",rangeMaxNumber);

