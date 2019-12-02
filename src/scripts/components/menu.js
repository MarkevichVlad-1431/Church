let button = document.getElementById('menu');
let menu = document.querySelector('.menu');
let current = 0;

menu.style.display = 'none';


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
  menu.style.display = 'block';
}

function closeMenu() {
  menu.style.display = 'none';
}
