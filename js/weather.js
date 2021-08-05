const API_KEYS = "1e75698d9be6393ad3a2d138e8483d67";
const WEATHER_LS = "weather";

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    fetch(url).then((res)=>res.json()).then((data)=>{
        const city =document.querySelector("#weather span:first-child");
        const clouds =document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        clouds.innerText = data.weather[0].main;
    });
}

function geoError(){
    alert("hi");
}
navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
