// eslint-disable-next-line strict
'use strict';

const Swiper = require('swiper/swiper-bundle');

(function () {
  let swiper;
  let sliderContainer = document.querySelector('.swiper-container');
  let paginationBlock = document.querySelector('.slider-pagination');
  let currentDotOut = document.querySelector('.slider-mobile-pagination__current');
  let totalDotsOut = document.querySelector('.slider-mobile-pagination__total');
  const ACTIVE_BULLET = 'swiper-pagination-bullet-active';
  const BREAKPOINT_MOBILE = 767;

  function initSwiper() {
    swiper = new Swiper('.swiper-main', {
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,

      pagination: {
        el: document.querySelector('.slider-pagination'),
        clickable: 'true',
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      navigation: {
        nextEl: '.slider-buttons__item--next',
        prevEl: '.slider-buttons__item--prev',
      },

      breakpoints: {
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1023: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1169: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  }

  function getBullets() {
    let bullets;
    if (paginationBlock) {
      bullets = paginationBlock.children;
    }
    return bullets;
  }

  function setMobileTotalBullet(bullets) {
    let totalBullets = bullets.length;

    return totalBullets;
  }

  function setMobileCurrentBullet(bullets) {
    let currentBullet;
    Array.from(bullets).forEach((element) => {
      if (element.classList.contains(ACTIVE_BULLET)) {
        currentBullet = +element.textContent;
      }
    });

    return currentBullet;
  }

  function renderMobilePagination(bullets) {
    totalDotsOut.textContent = setMobileTotalBullet(bullets);
    currentDotOut.textContent = setMobileCurrentBullet(bullets);
  }

  function realIndexChangeHandler(bullets) {
    swiper.on('transitionEnd', function () {
      renderMobilePagination(bullets);
    });
  }

  function setMobilePagination() {
    let bullets = getBullets();
    realIndexChangeHandler(bullets);
  }

  function breakpointChangeHandler() {
    let viewport = document.documentElement.clientWidth;

    if (viewport < BREAKPOINT_MOBILE) {
      setMobilePagination();
    }
  }

  function initMobilePagination() {
    let bullets = getBullets();
    renderMobilePagination(bullets);
  }

  function initSlider() {
    if (sliderContainer) {
      initSwiper();

      if (swiper && paginationBlock && currentDotOut && totalDotsOut) {
        initMobilePagination();
        breakpointChangeHandler();
        swiper.on('breakpoint', breakpointChangeHandler);
      }
    }
  }

  initSlider();
})();
