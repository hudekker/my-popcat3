let num = 0;
let numClicked = document.querySelector("#num-clicked");
let body = document.querySelector("body");
let popcatClose = document.querySelector("#popcat-close");
let popcatOpen = document.querySelector("#popcat-open");
let btnGreen = document.querySelector("#btn-green");
let btnRed = document.querySelector("#btn-red");
let btnBlue = document.querySelector("#btn-blue");
let audio = document.querySelector("#audio");

// // Advanced options
// let popcatOpenMouseUp = (event) => {
//   popcatClose.classList.remove("no-display");
//   popcatOpen.classList.add("no-display");
//   audio.play();

//   num = num + 1;
//   numClicked.innerText = "打了 " + num.toLocaleString() + "次";

//   popcatOpen.removeEventListener("mouseup", popcatOpenMouseUp);
// };

// popcatClose.addEventListener("mousedown", (event) => {
//   popcatClose.classList.add("no-display");
//   popcatOpen.classList.remove("no-display");

//   popcatOpen.addEventListener("mouseup", popcatOpenMouseUp);
// });

// Basic Option
popcatClose.addEventListener("click", (event) => {
  popcatClose.classList.add("no-display");
  popcatOpen.classList.remove("no-display");
  audio.play();

  num = num + 1;
  numClicked.innerText = "打了 " + num.toLocaleString() + "次";

  setTimeout(() => {
    popcatClose.classList.remove("no-display");
    popcatOpen.classList.add("no-display");
    audio.pause();
    audio.currentTime = 0;
  }, 100);
});

btnGreen.addEventListener("click", (event) => {
  body.style.backgroundColor = "green";
});
btnRed.addEventListener("click", (event) => {
  body.style.backgroundColor = "red";
});
btnBlue.addEventListener("click", (event) => {
  body.style.backgroundColor = "blue";
});
