const qoutes = [
    {
        qoute : "과거를 기억하지 못하는 이들은 과거를 반복하기 마련이다",
        author : "조지 산티야나"
    },
    {
        qoute : "우리가 반복적으로 행하는 것이 우리 자신이다. 그렇다면 탁월함은 행동이 아닌 습관인 것이다.",
        author : "아리스토텔레스"
    },
    {
        qoute : "편안함은 어려움 보다도 전진하는데 더 큰 위협이다",
        author : "덴젤 워싱턴"
    },
    {
        qoute : "그 반복에서 어떻게 새로움을 발견해내고 유지해나가는가. 이게 성공의 핵심이다.",
        author : "미생"
    },
    {
        qoute : "이리저리 핑계 대지 마세요. 그냥 해보세요. 실천 하세요 생각을 많이 하면 허상에 빠지며 머리만 아플 뿐입니다",
        author : "베네딕트 컴버비치"
    },
    {
        qoute : "좋아하지 않는 일을 선택해도 실패할 수 있다. 그렇다면 자신이 좋아하는 일을 선택하는것이 낫지 않을까?",
        author : "짐캐리"
    },
    {
        qoute : "오로지 진실할 뿐이다 거짓을 말할때 조차도",
        author : "알 파치노"
    },
    {
        qoute : "사람의 눈을 속이는 건 쉽지만 사람의 마음을 속이기는 어렵다",
        author : "알 파치노"
    },
];

const qoute = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todayQoute = qoutes[Math.floor(Math.random(qoutes)*qoutes.length)];

qoute.innerText = todayQoute.qoute;
author.innerText = todayQoute.author;