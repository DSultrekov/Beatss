const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.fullscreen__menu');
const cross = document.querySelector('.cross_icon')

function tooglepage(e){
  e.preventDefault()
  menu.classList.add('fullscreen__menu-active');
}

function tooglecross(e) {
  e.preventDefault()
  menu.classList.remove('fullscreen__menu-active')
}

hamburger.addEventListener('click' , tooglepage);
cross.addEventListener('click' , tooglecross);