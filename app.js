//boolean
const loggenIn = null;
console.log(loggenIn);//null 값
//null 은 there is nothing here
//아무것도 없는 채로 채워짐 비워져있음 empty
let a;//값이 없음 
console.log(a);//undefnied 타입 변수는 인지하지만 변수에대한 값이 없다

//variable
const playerName = "nico";//player property
const playerHandsome = true;
//아래꺼가 훨씬 더 정돈되어있음
//player.name;
//player.handsome;
//array
// player = ["nico",true];//이것은 어떤 property가 어떤 값인지 모름
//object
const player = {
    name : "nico",
    handsome : true, 
}; //우리는 객체에서 =을:로 쓰고 ;를 ,로 쓴다
console.log(player.name);//nico
console.log(player["handsome"]);//["property"]로 작성해야 된댜.  true
//갱신하기
//player = false;// error 왜냐면 const이기에 갱신 불가능
player.handsome = false;
//property 추가
player.age = 30;
console.log(player.handsome);//false
console.log(player.age);//30
//upadating with adding
//나이를 여기서 더 추가하고 싶다면 바꾸는것도 있지만 
player.age = player.age + 15;//도 있다.
console.log(player.age);//45