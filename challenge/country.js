const select = document.querySelector(".select");

const COUNTRY_LS = "country";

function selectedCountry(){
    const selected = select.value;
    localStorage.setItem(COUNTRY_LS,selected);
}

const savedCountry = localStorage.getItem(COUNTRY_LS);

if(savedCountry){
    const selectedOption = select.querySelector(`option[value =  ${savedCountry}]`);
    selectedOption.selected = true;
} 

select.addEventListener("change",selectedCountry);