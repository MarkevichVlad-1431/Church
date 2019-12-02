let menu = document.querySelector('.menu');
let ul = document.querySelector('.nav');

//catch width changes
menu.style.display = 'block';

function resize() {
  let width = window.innerWidth;

  if (width > '580') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

window.onresize = resize;
