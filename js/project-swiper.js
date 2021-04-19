window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container-4', {
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 568px
      568: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    loop: true,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
  });
})
