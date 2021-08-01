const images = [
    "나도데려가",
    "아수라백작",
    "쫀더기",
    "코비,베리"
];

const randomImg = images[Math.floor(Math.random(images)*images.length)];

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${randomImg}.jpg`;
backgroundImg.classList.add("bgimage");
document.body.appendChild(backgroundImg);

