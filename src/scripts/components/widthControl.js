let links = document.querySelectorAll('.nav >.link');
let ul = document.querySelector('.nav');

//catch width changes
function resize() {
  let width = window.innerWidth;

  if (width > '580') {
    links.forEach((item) => { item.style.display = 'block'});
  } else{
    links.forEach((item) => { item.style.display = 'none'});
  }
}

window.onresize = resize;