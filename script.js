let num = 0;
let numClicked = document.querySelector("#num-clicked");
let body = document.querySelector("body");
let poppycatClose = document.querySelector("#poppycat-close");
let poppycatOpen = document.querySelector("#poppycat-open");
let btnGreen = document.querySelector("#btn-green");
let btnRed = document.querySelector("#btn-red");
let btnBlue = document.querySelector("#btn-blue");
let audio = document.querySelector("#audio");

// // Advanced options
// let poppycatOpenMouseUp = (event) => {
//   poppycatClose.classList.remove("no-display");
//   poppycatOpen.classList.add("no-display");
//   audio.play();

//   num = num + 1;
//   numClicked.innerText = "打了 " + num.toLocaleString() + "次";

//   poppycatOpen.removeEventListener("mouseup", poppycatOpenMouseUp);
// };

// poppycatClose.addEventListener("mousedown", (event) => {
//   poppycatClose.classList.add("no-display");
//   poppycatOpen.classList.remove("no-display");

//   poppycatOpen.addEventListener("mouseup", poppycatOpenMouseUp);
// });

// Basic Option
poppycatClose.addEventListener("click", (event) => {
  poppycatClose.classList.add("no-display");
  poppycatOpen.classList.remove("no-display");
  audio.play();

  num = num + 1;
  numClicked.innerText = "被打了 " + num.toLocaleString() + "次";

  setTimeout(() => {
    poppycatClose.classList.remove("no-display");
    poppycatOpen.classList.add("no-display");
    audio.pause();
    audio.currentTime = 0;
  }, 100);
});

btnGreen.addEventListener("click", (event) => {
  // body.classList.add("btn-green");
  body.style.backgroundColor = "aquamarine";
  // numClicked.style.color = "black";
});
// });
btnRed.addEventListener("click", (event) => {
  body.style.backgroundColor = "lightcoral";
  // numClicked.style.color = "white";
});
btnBlue.addEventListener("click", (event) => {
  body.style.backgroundColor = "lightskyblue";
  // numClicked.style.color = "white";
});
