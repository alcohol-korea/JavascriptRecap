const select = document.querySelector(".select");

const COUNTRY_LS = "country";

function selectedCountry(){
    const selected = select.value;
    localStorage.setItem(COUNTRY_LS,selected);
}

const savedCountry = localStorage.getItem(COUNTRY_LS);

if(savedCountry){
    const option = select.querySelector(`option[value =  ${savedCountry}]`);
    option.selected = true;
} 

select.addEventListener("change",selectedCountry);