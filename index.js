window.onload = () => {
  let click = document.getElementById("l01_1").focus();
};



// CHARACTER SELECT

let ChooseChar = document.getElementById("characters__box");
ChooseChar.addEventListener("keydown", (e) => {
  let numberOfCells = document
    .getElementById("characters__box")
    .getElementsByTagName("td").length;
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
    case 13:
      linkToVersusPage();
      break;
  }
});

function moveUp() {
  var currentfocus = event.target.id.split("");
  var currentCharachter = event.target.tabIndex - 5;
  currentfocus.splice(2, 1, +currentfocus[2] - 1);
  var newfocus = currentfocus.join("");
  document.getElementById(newfocus).focus();

  document.querySelector(".player-first").src = playerImgSrc =
    `./imgs/choosen-${currentCharachter}` + ".png";
}

function moveDown() {
  var currentfocus = event.target.id.split("");
  var currentCharachter = event.target.tabIndex + 5;
  currentfocus.splice(2, 1, +currentfocus[2] + 1);
  var newfocus = currentfocus.join("");
  document.getElementById(newfocus).focus();
  document.querySelector(".player-first").src = playerImgSrc =
    `./imgs/choosen-${currentCharachter}` + ".png";
}

function moveRight() {
  var currentfocus = event.target.id.split("");
  var currentCharachter = event.target.tabIndex + 1;
  currentfocus.splice(
    currentfocus.length - 1,
    1,
    +currentfocus[currentfocus.length - 1] + 1
  );
  var newfocus = currentfocus.join("");
  document.getElementById(newfocus).focus();
  document.querySelector(".player-first").src = playerImgSrc =
    `./imgs/choosen-${currentCharachter}` + ".png";
}

function moveLeft() {
  var currentfocus = event.target.id.split("");
  var currentCharachter = event.target.tabIndex - 1;
  currentfocus.splice(
    currentfocus.length - 1,
    1,
    +currentfocus[currentfocus.length - 1] - 1
  );
  var newfocus = currentfocus.join("");
  document.getElementById(newfocus).focus();
  document.querySelector(".player-first").src = playerImgSrc =
    `./imgs/choosen-${currentCharachter}` + ".png";
}

function linkToVersusPage() {
  setTimeout(() => {
    document.location.href = "./versus.html";
  }, 2000);
}
