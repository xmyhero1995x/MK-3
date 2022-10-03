// VERSUS CODE

window.onload = function () {
  setTimeout(() => {
    document.location.href = "./fight.html";
  }, 4000);
};

let beat = new Audio("./sound/versus-code.mp3");


let versusCodeImgArr = document.querySelectorAll(".versus__item-img");
let versusCodeArr = ["dragon", "gift", "lotus", "yut", "moon", "tiger"];

let randomNumber = function () {
  const minNumber = 0;
  const maxNumber = versusCodeArr.length;
  const rand = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return rand;
};

function versusCode(keyNumber) {
  randomNumber();
  let versusCodeRand = versusCodeArr[randomNumber()];
  const imgSrc = `./imgs/${versusCodeRand}` + ".png";
  switch (keyNumber) {
    case 81:
      return (versusCodeImgArr[0].src = imgSrc);
    case 87:
      return (versusCodeImgArr[1].src = imgSrc);
    case 69:
      return (versusCodeImgArr[2].src = imgSrc);
    case 82:
      return (versusCodeImgArr[3].src = imgSrc);
    case 84:
      return (versusCodeImgArr[4].src = imgSrc);
    case 89:
      return (versusCodeImgArr[5].src = imgSrc);
  }
}

document.addEventListener("keydown", (event) => {
  const keyNumber = event.which;
  versusCode(keyNumber);
  beat.play();
});
