document.addEventListener('DOMContentLoaded', function () {

    if (document.documentElement.clientWidth <= 569) {
      document.querySelector('#events_slider').classList.toggle('swiper-container-5')
    }

  const swiper = new Swiper('.swiper-container-5', {
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //   },
    //   // when window width is >= 568px
    //   568: {
        slidesPerView: 1,
        spaceBetween: 58,
    //   },
    // },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    observer: true
  });
})
