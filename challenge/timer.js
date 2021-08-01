const timerTitle = document.getElementById("js-timer");//h2 가져옴

function christmasTimer(){
    const now = Date.now();//지금까지의 시간ms로 나타낸 것
    const christmas = new Date("2021-12-25:00:00:00+0900"); //크리스마스 시간
    const term = christmas.getTime()-now;//지금부터 크리스마스까지
    const days = String(Math.floor(term/(1000*60*60*24))).padStart(2,"0");
    //Math.floor 해서 term을 하루치의 ms로 나눴을때 몫을 구함
    const hours = String(Math.floor((term%(1000*60*60*24)/(1000*60*60)))).padStart(2,"0");
    //days에서 나눈몫의 나머지를 구함 그 나머지는 시간이 ms로 표현됨
    //나머지를 한시간치 ms로 나눈 몫을 구함 minutes과 seconds도 같음
    const minutes = String(Math.floor((term%(1000*60*60)/(1000*60)))).padStart(2,"0");
    const seconds = String(Math.floor((term%(1000*60)/(1000)))).padStart(2,"0");
    timerTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
christmasTimer();
setInterval(christmasTimer,1000);