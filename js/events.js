document.addEventListener('DOMContentLoaded', function () {

    if (document.documentElement.clientWidth > 768) {
      $("#button").click(function () {
        $(".effect").toggle("blind", 1000);
      });
    }

    if (document.documentElement.clientWidth <= 768) {
      $("#button").click(function () {
        $(".effect").toggle("blind", 1000);
        $("#effect").toggle("blind", 1000);
      });
    }
});

