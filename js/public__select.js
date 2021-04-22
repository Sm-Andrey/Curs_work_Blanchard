document.addEventListener('DOMContentLoaded', function () {
  if (document.documentElement.clientWidth <= 568) {
    $('.active').hide();



    function runEffect() {
      $(".category_button").on("click", function () {
        $('.active').show("blind", 500, callback);
      });
    }


    function callback() {
      $(".category_button").on("click", function () {
        if ($('.checkbox__input').is(':checked')) {
          $('.active').show();
        } else {
          $(".active").hide("blind", 500, runEffect);
        }
      });
    }
  }
});

