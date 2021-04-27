document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    //минимум пунктов после которых появляется скролл
    $(".gallery__select-1").click(function () {
      $(".gallery__select-list-1").toggle("blind", 500);
    });
  });

  $(function () {
    //минимум пунктов после которых появляется скролл
    $(".gallery__select-2").click(function () {
      $(".gallery__select-list-2").toggle("blind", 500);
    });
  });

  $(function () {
    //минимум пунктов после которых появляется скролл
    $(".gallery__select-3").click(function () {
      $(".gallery__select-list-3").toggle("blind", 500);
    });
  });

});
