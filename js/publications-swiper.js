window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container-3', {
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 34
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 50
      },
      1920: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 55
      }
    },
    loop: true,
    observer: true,
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
