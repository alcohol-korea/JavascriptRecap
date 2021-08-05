/* 
이3가지 변수들은 찾기 귀찮고 시간도 많이 걸리니  미리 세팅함
복사해서 사용하기 
const API_KEYS = "1e75698d9be6393ad3a2d138e8483d67";
const WEATHER_LS = "weather";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
*/
const API_KEYS = "1e75698d9be6393ad3a2d138e8483d67";

const WEATHER_LS = "weather";

function getWeather(lat,lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    fetch(url).then((res)=>res.json()).then((data)=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function geoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherObj = {
        lat,
        lon
    };
    localStorage.setItem(WEATHER_LS,JSON.stringify(weatherObj));
    getWeather(lat,lon);
}

function geoError(){
    alert("we can't acess your location!!!");
}

const savedWeather = localStorage.getItem(WEATHER_LS);

if(savedWeather === null){
    navigator.geolocation.getCurrentPosition(geoSucess,geoError);
}else{
    const parsedWeather = JSON.parse(savedWeather);
    getWeather(parsedWeather.lat,parsedWeather.lon);
}

