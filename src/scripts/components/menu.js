let button = document.getElementById('menu');
let links = document.querySelectorAll('.nav >.link');
let current = 0;

links.forEach((item) => { item.style.display = 'none'});

button.onclick = function (event) {
  let target = event.target;

  if (target) {
    current++;

    if (current % 2 == 1) {
      openMenu(target);
    } else {
      closeMenu(target);
    }
  }
}

function openMenu() {
  links.forEach((item) => { item.style.display = 'block'});
}

function closeMenu() {
  links.forEach((item) => { item.style.display = 'none'});
}