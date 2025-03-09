let screen = document.querySelector(".results");

function callMe(e) {
  screen.value += e;
}

function calculate() {
  screen.value = eval(screen.value);
}

let sound = new Audio();
sound.src = "../audio/click.mp3";
