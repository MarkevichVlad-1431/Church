let slider = document.querySelector('.slider');

let slid1 = document.querySelector('#slider_1');
let slid2 = document.querySelector('#slider_2');
let slid3 = document.querySelector('#slider_3');

slider.onclick = function (event) {
  let target = event.target;

  switch (target.id) {
    case 'button_1':
      slid1.style.display = 'block';
      slid2.style.display = 'none';
      slid3.style.display = 'none';
      break;

    case 'button_2':
      slid1.style.display = 'none';
      slid2.style.display = 'block';
      slid3.style.display = 'none';
      break;

    case 'button_3':
      slid1.style.display = 'none';
      slid2.style.display = 'none';
      slid3.style.display = 'block';
      break;

    default:
      break;
  }
}
