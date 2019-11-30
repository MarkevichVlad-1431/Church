let button = document.getElementById('menu');
let ul = document.querySelector('.nav');
let current = 0;

console.log(ul);
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

function openMenu(elem) {
  ul.classList.add('openMenu');
  ul.classList.remove('closeMenu');
}

function closeMenu(elem) {
  ul.classList.add('closeMenu');
  ul.classList.remove('openMenu');
}