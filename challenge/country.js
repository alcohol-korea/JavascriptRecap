const select = document.querySelector(".select");

const COUNTRY_LS = "country";

function selectingCountry(){
    const selectedCountry = select.value;//선택한 값을 변수로 저장
    localStorage.setItem(COUNTRY_LS,selectedCountry);//savecountry
}

const savedCountry = localStorage.getItem(COUNTRY_LS);//저장된값 가져옴
//loadedCountry 
if(savedCountry){//savedCountry없으면 --choose country--가 나오니깐 있는경우만 하면됨
    const option = select.querySelector(`option[value=${savedCountry}]`);//option가져옴
    option.selected = true;//option속성에서selected 참으로 함 
}

select.addEventListener("change",selectingCountry);