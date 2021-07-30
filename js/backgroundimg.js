const images = [
        "나도데려가.jpg",
        "아수라백작.jpg",
        "쫀더기.jpg",
        "코비,베리.jpg",
        "carrot.jpg",
        "lemon.jpg",
];

const selectedImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${selectedImg}`;
bgImg.classList.add("bgimage");

document.body.appendChild(bgImg);