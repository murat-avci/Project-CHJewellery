
'use strict';

(function () {
  let swiperCatalog;
  let sliderContainer = document.querySelector('.catalog__slider');
  let sliderNavigation = document.querySelector('.catalog__slider-navigation');

  function initCatalogSwiper() {
    swiperCatalog = new window.Swiper('.catalog__slider', {
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

    return swiperCatalog;
  }

  function initCatalogSlider() {
    if (sliderContainer && sliderNavigation) {
      initCatalogSwiper();
    }
  }

  initCatalogSlider();
})();
