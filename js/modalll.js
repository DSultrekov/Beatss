const modal = document.querySelector('.modal');
const body = document.querySelector('body');

$('.form').submit(e => {
  e.preventDefault();
  modal.classList.add('modal__active');
  body.classList.add('heigh__limitation');

  

  const form = $(e.currentTarget);
  const name = form.find ("[name='name']");
  const phone = form.find ("[name='phone']");
  const comment = form.find ("[name='comment']");
  const to = form.find("[name='to']");

  $.ajax({
    url: "https://webdev-api.loftschool.com/sendmail",
    method: "post",
    data: {
      name: name.val(),
      phone: phone.val(),
      comment: comment.val(),
      to: to.val(),
    },
  });
})

$('.app-submit-btn').click(e => {
  e.preventDefault();
  modal.classList.remove('modal__active');
  body.classList.remove('heigh__limitation')
})