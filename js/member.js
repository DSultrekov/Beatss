const btn_names = document.querySelectorAll('.member__name');

btn_names.forEach(item=>{

item.addEventListener('click', function(event){
  const parentEL = event.target.parentElement.parentElement;
  const memberDescription = parentEL.querySelector('.member__description');
  const arrow = parentEL.querySelector('.member__name-arrow');
  const openEL = document.querySelectorAll('.member__description_visible');
  const arrowEl = document.querySelectorAll('.member__name-arrow_rotated');

  for (let i=0; i<arrowEl.length;i++){
   if (arrowEl[i] != memberDescription){
    arrowEl[i].classList.remove('member__name-arrow_rotated')}
  }

  if (arrow.classList.contains('member__name-arrow_rotated')){
    arrow.classList.remove('member__name-arrow_rotated');
  } else {
    arrow.classList.add('member__name-arrow_rotated');
  }

 for(let i=0; i<openEL.length;i++){
  if (openEL[i] != memberDescription){
    openEL[i].classList.remove('member__description_visible')
    }
  }

  if (memberDescription.classList.contains('member__description_visible')){
    memberDescription.classList.remove('member__description_visible');
  } else {
    memberDescription.classList.add('member__description_visible');
  }
  
})
})
