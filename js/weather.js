const API_KEYS = "1e75698d9be6393ad3a2d138e8483d67";

const WEATHER_LS = "weather";

function getWeather(lat,lon){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    fetch(url).then((res)=>res.json()).then((data)=>{
        const city =document.querySelector("#weather span:first-child");
        const weather =document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherObj = {
        lat,
        lon
    };
    localStorage.setItem(WEATHER_LS,JSON.stringify(weatherObj));//브라우저는 string만 저장된다
    getWeather(lat,lon)
}

function geoError(){
    alert("hi");
}

const savedWeather = localStorage.getItem(WEATHER_LS);

if(savedWeather === null){
    navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
}else{
    const parsedWeather = JSON.parse(savedWeather);
    //브라우저에는 string이므로 다시 문자열을 프로퍼티와 값을 객체로 바꾼다
    getWeather(parsedWeather.lat,parsedWeather.lon);
}