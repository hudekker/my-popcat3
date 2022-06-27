let num = 0;
let displayNum = document.querySelector("#num-clicked");
let popcatGroup = document.querySelector(".popcat-group");
let popcat1 = document.querySelector("#popcat1");
let popcat2 = document.querySelector("#popcat2");
// let audio = new Audio("https://hudekker.github.io/my-popcat/popcat-sound.mp3");
let audio = document.querySelector("#audio");
let mobile = false;

let checkMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    console.log("mobile device");
    return (mobile = true);
  } else {
    // false for not mobile device
    console.log("not mobile device");
    return (mobile = false);
  }
};

mobile = checkMobile();

let changeColor = (myThis) => {
  let myBody = document.querySelector("body");
  let myColor = myThis.id;
  console.log(myColor);
  myBody.style.backgroundColor = myColor;
};

let mouseDown = (event) => {
  if (mobile == false) {
    popcat1.classList.add("no-display");
    popcat2.classList.remove("no-display");
    audio.play();
  }
};

let mouseUp = (event) => {
  if (mobile == false) {
    num++;
    displayNum.innerText = "Popcat clicked: " + num;
    popcat1.classList.remove("no-display");
    popcat2.classList.add("no-display");
  }
};

popcatGroup.addEventListener("touchstart", (event) => {
  popcat1.classList.add("no-display");
  popcat2.classList.remove("no-display");
  audio.play();
});

popcatGroup.addEventListener("touchend", (event) => {
  num++;
  displayNum.innerText = "Popcat clicked: " + num;
  popcat1.classList.remove("no-display");
  popcat2.classList.add("no-display");
  audio = document.querySelector("#audio");
});
