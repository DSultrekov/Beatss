const list = $('.product-menu');
list.on('click', '.products-menu__item', function  (e) {
  e.preventDefault()
  if (e.target.classList.contains('products-menu__content')) return
  $(this).siblings('li').removeClass('products-menu__item_active')
  $(this).toggleClass('products-menu__item_active')
})