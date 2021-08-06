const gameTitle = document.querySelector("h2");
const range = document.querySelector(".range input");
const numberForm = document.querySelector(".randomnumber");
const number = document.querySelector(".randomnumber label input");

function rangeMaxNumber(e){
    e.preventDefault();
    const rangeInput = range.value;
    gameTitle.innerText = `Genrate a number between 0 and ${rangeInput}`;
    const machineNumber =  Math.floor(Math.random(rangeInput)*rangeInput);
    console.dir(machineNumber);
    numberForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const numberInput = number.value;
        const compareTitle = document.querySelector(".compare");
        compareTitle.classList.remove("hidden");
        compareTitle.innerText = `You chose: ${numberInput}, the machine chose: ${machineNumber}.`;
        const resultTitle = document.querySelector(".result");
        resultTitle.classList.add("hidden");
        if(numberInput===machineNumber){
            resultTitle.innerText = "You win!";
            resultTitle.classList.add("teal");
        }else{
            resultTitle.innerText = "You lost!";
            resultTitle.classList.add("tomato");
        }
    });
}

range.addEventListener("change",rangeMaxNumber);
