'use strict';

(function () {
  const sliderContainer = document.querySelector('.catalog__slider');
  const sliderNavigation = document.querySelector('.catalog__slider-navigation');

  const swiperCatalog = new window.Swiper('.catalog__slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('.catalog-slider-navigation__pagination'),
      clickable: 'true',
      renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    navigation: {
      nextEl: '.catalog-slider-navigation__btn--next',
      prevEl: '.catalog-slider-navigation__btn--prev',
    },
  });


  function initCatalogSlider() {
    if (sliderContainer && sliderNavigation) {
      swiperCatalog();
    }
  }

  initCatalogSlider();
})();
