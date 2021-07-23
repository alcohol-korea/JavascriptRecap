const clock = document.querySelector(".js-clock");
 
function getTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
		// now.get시간은 숫자 문자열로 바꾸고 padStart함
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
		clock.innerText = `${hours}:${minutes}:${seconds}`;

}

function init(){
getTime();
setInterval(getTime ,1000 );
}
init(); 