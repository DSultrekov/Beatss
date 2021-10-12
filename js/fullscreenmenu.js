const btn__hamburger = document.querySelectorAll('.hamburger');

btn__hamburger.forEach(item=>{

item.addEventListener('click', function(event){
  const parentEL = event.target.parentElement.parentElement;
  const fullscreenmenu = parentEL.querySelector('.fullscreen__menu');

  if (fullscreenmenu.classList.contains('fullscreen__menu-active')){
    fullscreenmenu.classList.remove('fullscreen__menu-active');
  } else {
    fullscreenmenu.classList.add('fullscreen__menu-active');
  }
})
})