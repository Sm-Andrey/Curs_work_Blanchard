window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container-2', {
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 568px
      568: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 15
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 15
      },
      1920: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 15
      }
    },
    loop: true,
    observer: true,
    loopedSlides: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
  });
})
