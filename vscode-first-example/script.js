
// 定義變數 Define variables
let btn = document.querySelector('button');
let headline = document.querySelector('h1');
let headlineA = 'Hello, World!'
let headlineB = '世界好！';
let pic = document.querySelector('img')
let picA = 'https://t.pimg.jp/086/559/761/5/86559761.jpg'
let picB = 'https://en.pimg.jp/084/482/824/1/84482824.jpg'
let body = document.body;

// 初始化變數 Initialize variable value
headline.innerText = headlineA;
headline.style.height = '33px';
pic.src = picA;

// Event listener text
headline.addEventListener('click', (event) => {

  headline.classList.toggle('intro');

  if (headline.classList.contains('intro')) {
    headline.innerText = headlineA;
  } else {
    headline.innerText = headlineB;
  }

})

// Event listener button
pic.addEventListener('click', (event) => {

  pic.classList.toggle('picA');

  if (pic.classList.contains('picA')) {
    pic.src = picA;
  } else {
    pic.src = picB;

  }

})