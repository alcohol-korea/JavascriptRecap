const timerTitle = document.querySelector(".js-timer");

function getTimer(){
    const now = Date.now();
    const christmas = new Date("2021-12-24:00:00:00+0900");
    const timer = christmas.getTime()-now;
    const days = String(Math.floor(timer/(1000*60*60*24))).padStart(2,"0");
    const hours = String(Math.floor(timer%(1000*60*60*24)/(1000*60*60))).padStart(2,"0");
    const minutes = String(Math.floor(timer%(1000*60*60)/(1000*60))).padStart(2,"0");
    const seconds = String(Math.floor(timer%(1000*60)/(1000))).padStart(2,"0");
    timerTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getTimer();
setInterval(getTimer,1000);