const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.fullscreen__menu')

function tooglepage(){
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toogle('hamburger-active');
}

hamburger.addEventListener('click' , tooglepage);