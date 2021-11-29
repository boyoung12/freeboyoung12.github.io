const imeges = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",];

console.log(imeges);

const choiseImege = imeges[Math.floor(Math.random() * imeges.length)];

const bgImege = document.createElement("img");

bgImege.id = "bgimg";
bgImege.src = `imege/${choiseImege}`;

document.body.appendChild(bgImege);


