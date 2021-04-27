window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container-1', {
    loop: true,
    observer: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });
})
