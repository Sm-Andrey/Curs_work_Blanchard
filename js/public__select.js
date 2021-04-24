document.addEventListener('DOMContentLoaded', function () {
  if (document.documentElement.clientWidth <= 568) {
    $('.active').hide();
  let show = false;
  $(".category_button").on("click", function () {
    show = !show;
    if (show) $('.active').show("blind", 500);
    else {
      $('.checkbox__input').each(function() {
        const input = $(this);
        const label = input.parent();
        if (!input.is(':checked')) label.hide("blind", 500);
      })
    }
  });
  }
});

