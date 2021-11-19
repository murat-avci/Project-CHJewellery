/* eslint-disable no-invalid-this */
'use strict';

(function () {
  let accordion = document.querySelector('.faq-list');
  const ACCORDION_TOGGLE = 'faq-list__btn';
  const ACCORDION_ANSWER = 'faq-list__answer';
  const ACCORDION_QUESTION = 'faq-list__question';
  const CLOSED_ANSWER = 'faq-list__answer--closed';
  const CLOSED_QUESTION = 'faq-list__question--closed';

  function initAccordion(questions, answers, toggles) {
    if (questions) {
      questions.forEach((elem) => {
        elem.classList.toggle(CLOSED_QUESTION);
      });
    }

    if (answers) {
      answers.forEach((elem) => {
        elem.classList.toggle(CLOSED_ANSWER);
      });
    }

    if (toggles) {
      toggles.forEach((elem) => {
        elem.addEventListener('click', toggleClickHandler);
      });
    }
  }

  function toggleClickHandler() {
    let questionNode = this.parentNode;
    questionNode.classList.toggle(CLOSED_QUESTION);

    let answerNode = questionNode.nextElementSibling;
    answerNode.classList.toggle(CLOSED_ANSWER);

    let currentQuestions = accordion.querySelectorAll('.' + ACCORDION_QUESTION);

    currentQuestions.forEach((element) => {
      if (questionNode !== element && !element.classList.contains(CLOSED_QUESTION)) {
        element.classList.toggle(CLOSED_QUESTION);
        element.nextElementSibling.classList.toggle(CLOSED_ANSWER);
      }
    });
  }

  if (accordion) {
    let ACCORDION_QUESTIONS = accordion.querySelectorAll('.' + ACCORDION_QUESTION);
    let ACCORDION_ANSWERS = accordion.querySelectorAll('.' + ACCORDION_ANSWER);
    let ACCORDION_TOGGLES = accordion.querySelectorAll('.' + ACCORDION_TOGGLE);

    initAccordion(ACCORDION_QUESTIONS, ACCORDION_ANSWERS, ACCORDION_TOGGLES);
  }
})();

'use strict';

(function () {
  let filterBlock = document.querySelector('.filter');
  let closeFilterBtn = document.querySelector('.filter__close');
  let openFilterBtn = document.querySelector('.catalog__filter-link');
  const FILTER_OPENED = 'filter--opened';

  function initFilter() {
    if (filterBlock && openFilterBtn) {
      openFilterBtn.addEventListener('click', openFilterBtnHandler);
      window.addEventListener('keydown', escapeHAndler);
    }
  }

  function closeFilterBtnHandler() {
    filterBlock.classList.toggle(FILTER_OPENED);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      changeFilterState();
    }
  }

  function changeFilterState() {
    if (filterBlock.classList.contains(FILTER_OPENED)) {
      closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    } else {
      closeFilterBtn.addEventListener('click', closeFilterBtnHandler);
    }

    filterBlock.classList.toggle(FILTER_OPENED);
  }

  function openFilterBtnHandler(evt) {
    evt.preventDefault();
    changeFilterState();
  }

  initFilter();
})();

/* eslint-disable no-unused-vars */
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
  }

  function initCatalogSlider() {
    if (sliderContainer && sliderNavigation) {
      initCatalogSwiper();
    }
  }

  initCatalogSlider();
})();

/* eslint-disable no-invalid-this */
'use strict';

(function () {
  let accordionBlock = document.querySelector('.filter__form');
  const FILTER_FIELD = 'filter-field';
  const FILTER_FIELD_TOGGLE = 'filter-field__toggle';
  const FILTER_FIELD_CLOSED = 'filter-field--closed';

  if (accordionBlock) {
    let accordionToggles = accordionBlock.querySelectorAll('.' + FILTER_FIELD_TOGGLE);
    let accordionFields = accordionBlock.querySelectorAll('.' + FILTER_FIELD);

    if (accordionToggles && accordionFields) {
      initAccordion(accordionFields, accordionToggles);
    }
  }

  function initAccordion(fields, toggles) {
    fields.forEach((elem) => {
      elem.classList.toggle(FILTER_FIELD_CLOSED);
    });

    toggles.forEach((elem) => {
      elem.addEventListener('click', toggleClickHandler);
    });
  }

  function toggleClickHandler() {
    let currentField = this.parentNode;

    currentField.classList.toggle(FILTER_FIELD_CLOSED);
  }
})();

'use strict';

(function () {
  let loginUserEmail = document.querySelector('#useremail');
  const USER_EMAIL_KEY = 'usermail';

  function inputLoginEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, loginUserEmail.value);
  }

  function initLoginEmailLocalStorage() {
    if (loginUserEmail) {
      loginUserEmail.addEventListener('blur', inputLoginEmailBlurHandler);
    }
  }

  initLoginEmailLocalStorage();
})();

'use strict';

(function () {
  let burgerBtn = document.querySelector('.burger-btn');
  let header = document.querySelector('.header');
  let logo = document.querySelector('.logo');
  let searchForm = document.querySelector('.search-form');
  let cartLink = document.querySelector('.cart-link');
  let mainNav = document.querySelector('.main-nav');
  const HEADER_MENU = 'header--menu';
  const LOGO_MENU = 'logo--menu';
  const SEARCH_FORM_MENU = 'search-form--menu';
  const CART_LINK_MENU = 'cart-link--menu';
  const MAIN_NAV_MENU = 'main-nav--menu';
  const MAIN_NAV_JS = 'main-nav--js';
  const BURGER_BTN_JS = 'burger-btn--js';
  const BURGER_BTN_MENU = 'burger-btn--menu';

  function initMenu() {
    if (burgerBtn) {
      burgerBtn.addEventListener('click', burgerBtnClickHandler);
      burgerBtn.classList.toggle(BURGER_BTN_JS);
    }

    if (mainNav) {
      mainNav.classList.toggle(MAIN_NAV_JS);
    }

    if (header) {
      header.classList.toggle(HEADER_MENU);
    }

    if (logo) {
      logo.classList.toggle(LOGO_MENU);
    }

    if (cartLink) {
      cartLink.classList.toggle(CART_LINK_MENU);
    }

    if (searchForm) {
      searchForm.classList.toggle(SEARCH_FORM_MENU);
    }

    if (mainNav) {
      mainNav.classList.toggle(MAIN_NAV_MENU);
    }
  }

  initMenu();

  function burgerBtnClickHandler() {
    if (burgerBtn) {
      burgerBtn.classList.toggle(BURGER_BTN_MENU);
    }

    if (header) {
      header.classList.toggle(HEADER_MENU);
    }

    if (logo) {
      logo.classList.toggle(LOGO_MENU);
    }

    if (cartLink) {
      cartLink.classList.toggle(CART_LINK_MENU);
    }

    if (searchForm) {
      searchForm.classList.toggle(SEARCH_FORM_MENU);
    }

    if (mainNav) {
      mainNav.classList.toggle(MAIN_NAV_MENU);
    }
  }
})();

'use strict';

(function () {
  let pageBody = document.querySelector('body');
  let modal = document.querySelector('.modal');
  let loginLinks = document.querySelectorAll('.login-link-js');
  let closeLoginFormBtn = document.querySelector('.login__close');
  let activeElements = [];
  let maxTabIndexNum;
  let inputFocused = document.querySelector('#useremail');
  const BODY_OVERFLOW = 'body--overflow';
  const MODAL_OPENED = 'modal--opened';
  const MODAL_OVERLAY = 'modal';

  function findModalElements() {
    let elements = modal.querySelectorAll('*');
    setActiveElementArray(elements);
  }

  function setActiveElementArray(elements) {
    elements.forEach((element) => {
      let tag = element.tagName;
      if (tag === 'A' || tag === 'INPUT' || tag === 'BUTTON' || tag === 'TEXTAREA') {
        activeElements.push(element);
      }
    });
  }

  function setTabindexActiveElements() {
    maxTabIndexNum = activeElements.length;

    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].setAttribute('tabindex', '' + (i + 1));
      activeElements[i].addEventListener('blur', activeElementBlurHandler);
    }
  }

  function activeElementBlurHandler(evt) {
    let currentTabIndex = evt.target.getAttribute('tabindex');

    if (+currentTabIndex === maxTabIndexNum) {
      activeElements[0].focus();
    }
  }

  function setModalActiveElements() {
    findModalElements();
    setTabindexActiveElements();
  }

  function resetTabindexActiveElements() {
    activeElements.forEach((element) => {
      element.removeEventListener('blur', activeElementBlurHandler);
    });
  }

  initModalToggles();

  function initModalToggles() {
    if (loginLinks) {
      setModalTogglesClickHandler(loginLinks);
    }
  }

  function setModalTogglesClickHandler(array) {
    if (array) {
      array.forEach((element) => {
        element.addEventListener('click', toggleClickHandler);
      });
    }
  }

  function toggleClickHandler(evt) {
    evt.preventDefault();
    setModalActiveState();
  }

  function setModalActiveState() {
    if (modal) {
      modal.classList.toggle(MODAL_OPENED);
      pageBody.classList.toggle(BODY_OVERFLOW);
      inputFocused.focus();
    }

    window.addEventListener('keydown', escapeHAndler);

    if (closeLoginFormBtn) {
      closeLoginFormBtn.addEventListener('click', closeBtnClickHandler);
    }

    if (modal) {
      modal.addEventListener('click', overlayClickHandler);
    }

    setModalActiveElements();
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      setModalInactiveState();
    }
  }

  function closeBtnClickHandler() {
    setModalInactiveState();
  }

  function overlayClickHandler(evt) {
    let element = evt.target;

    if (element.classList.contains(MODAL_OVERLAY)) {
      setModalInactiveState();
    } else {
      return;
    }
  }

  function setModalInactiveState() {
    modal.classList.toggle(MODAL_OPENED);
    pageBody.classList.toggle(BODY_OVERFLOW);

    window.removeEventListener('keydown', escapeHAndler);
    closeLoginFormBtn.removeEventListener('click', closeBtnClickHandler);
    modal.removeEventListener('click', overlayClickHandler);
    resetTabindexActiveElements();
  }
})();

'use strict';

(function () {
  let signupUserEmail = document.querySelector('#usermail');
  const USER_EMAIL_KEY = 'usermail';

  function inputSignupEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, signupUserEmail.value);
  }

  function initSignupEmailLocalStorage() {
    if (signupUserEmail) {
      signupUserEmail.addEventListener('blur', inputSignupEmailBlurHandler);
    }
  }

  initSignupEmailLocalStorage();
})();

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
