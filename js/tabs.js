$(".reviews__switcher-link").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const curItem = $this.closest(".reviews__switcher-item");

  curItem.addClass("active").siblings().removeClass("active");
});