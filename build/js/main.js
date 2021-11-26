'use strict';

(function () {
  const accordionBlock = document.querySelector('.faq-list');
  const ACCORDION_TOGGLE_CLASS = 'faq-list__btn';
  const ACCORDION_ANSWER_CLASS = 'faq-list__answer';
  const ACCORDION_QUESTION_CLASS = 'faq-list__question';
  const CLOSED_ANSWER_CLASS = 'faq-list__answer--closed';
  const CLOSED_QUESTION_CLASS = 'faq-list__question--closed';

  function initAccordion(quesions, answers, toggles) {
    if (quesions) {
      quesions.forEach((elem) => {
        elem.classList.toggle(CLOSED_QUESTION_CLASS);
      });
    }

    if (answers) {
      answers.forEach((elem) => {
        elem.classList.toggle(CLOSED_ANSWER_CLASS);
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
    questionNode.classList.toggle(CLOSED_QUESTION_CLASS);

    let answerNode = questionNode.nextElementSibling;
    answerNode.classList.toggle(CLOSED_ANSWER_CLASS);

    let currentQuestions = accordionBlock.querySelectorAll('.' + ACCORDION_QUESTION_CLASS);
    currentQuestions.forEach((element) => {
      if (questionNode !== element && !element.classList.contains(CLOSED_QUESTION_CLASS)) {
        element.classList.toggle(CLOSED_QUESTION_CLASS);
        element.nextElementSibling.classList.toggle(CLOSED_ANSWER_CLASS);
      }
    });
  }

  if (accordionBlock) {
    let accordionQuestions = accordionBlock.querySelectorAll('.' + ACCORDION_QUESTION_CLASS);
    let accordionAnswers = accordionBlock.querySelectorAll('.' + ACCORDION_ANSWER_CLASS);
    let accordionToggles = accordionBlock.querySelectorAll('.' + ACCORDION_TOGGLE_CLASS);
    initAccordion(accordionQuestions, accordionAnswers, accordionToggles);
  }
})();

'use strict';

(function () {
  const pageBody = document.querySelector('body');
  const filterBlock = document.querySelector('.filter');
  const closeFilterBtn = document.querySelector('.filter__close');
  const openFilterBtn = document.querySelector('.catalog__filter-link');
  const windowBlocker = document.querySelector('.window-blocker');
  const FILTER_OPENED = 'filter--opened';
  const WINDOW_OPENED = 'window--opened';
  const BODY_OVERFLOW = 'body--overflow';
  let activeElements = [];
  let maxTabIndexNum;

  function findFilterElements() {
    let elements = filterBlock.querySelectorAll('*');
    setActiveElementArray(elements);
  }

  function setActiveElementArray(elements) {
    elements.forEach((element) => {
      let tag = element.tagName;
      if (tag === 'a' || tag === 'input' || tag === 'button' || tag === 'textarea') {
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

  function setFilterActiveElements() {
    findFilterElements();
    setTabindexActiveElements();
  }

  function resetTabindexActiveElements() {
    activeElements.forEach((element) => {
      element.removeEventListener('blur', activeElementBlurHandler);
    });
  }

  initFilterToggles();

  function initFilterToggles() {
    if (openFilterBtn) {
      setFilterTogglesClickHandler(openFilterBtn);
    }
  }

  function setFilterTogglesClickHandler(elm) {
    elm.addEventListener('click', toggleClickHandler);
  }


  function toggleClickHandler(evt) {
    evt.preventDefault();

    setFilterActiveState();
  }

  function setFilterActiveState() {
    if (filterBlock && openFilterBtn) {
      filterBlock.classList.toggle(FILTER_OPENED);
      if (filterBlock.classList.contains(FILTER_OPENED)) {
        pageBody.classList.add(BODY_OVERFLOW);
        windowBlocker.classList.add(WINDOW_OPENED);
      } else {
        pageBody.classList.remove(BODY_OVERFLOW);
        windowBlocker.classList.remove(WINDOW_OPENED);
      }
    }

    window.addEventListener('keydown', escapeHAndler);

    if (closeFilterBtn) {
      closeFilterBtn.addEventListener('click', closeFilterBtnHandler);
    }

    setFilterActiveElements();
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      setFilterInactiveState();
    }
  }

  function closeFilterBtnHandler() {
    setFilterInactiveState();
  }

  function setFilterInactiveState() {
    filterBlock.classList.toggle(FILTER_OPENED);
    pageBody.classList.toggle(BODY_OVERFLOW);
    window.removeEventListener('keydown', escapeHAndler);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    resetTabindexActiveElements();
    windowBlocker.classList.remove(WINDOW_OPENED);
  }
})();


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

'use strict';

(function () {
  const accordionBlock = document.querySelector('.filter__form');
  const FIELD_CLASS = 'filter-field';
  const TOGGLE_CLASS = 'filter-field__toggle';
  const FIELD_CLOSED_CLASS = 'filter-field--closed';

  if (accordionBlock) {
    const accordionToggles = accordionBlock.querySelectorAll('.' + TOGGLE_CLASS);
    const accordionFields = accordionBlock.querySelectorAll('.' + FIELD_CLASS);
    if (accordionToggles && accordionFields) {
      initAccordion(accordionFields, accordionToggles);
    }
  }

  function initAccordion(fields, toggles) {
    fields.forEach((elem) => {
      elem.classList.toggle(FIELD_CLOSED_CLASS);
    });

    toggles.forEach((elem) => {
      elem.addEventListener('click', toggleClickHandler);
    });
  }

  function toggleClickHandler() {
    let currentField = this.parentNode;
    currentField.classList.toggle(FIELD_CLOSED_CLASS);
  }
})();

'use strict';

(function () {
  const loginUserEmail = document.querySelector('#useremail');
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
  let swiper;
  const sliderContainer = document.querySelector('.swiper-container');
  const paginationBlock = document.querySelector('.slider-pagination');
  const currentDotOut = document.querySelector('.slider-mobile-pagination__current');
  const totalDotsOut = document.querySelector('.slider-mobile-pagination__total');
  const ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';
  const BREAKPOINT_MOBILE = 767;

  function initSwiper() {
    swiper = new window.Swiper('.swiper-main', {
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
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
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
      if (element.classList.contains(ACTIVE_BULLET_CLASS)) {
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

'use strict';

(function () {
  const HEADER_MENU = 'header--menu';
  const LOGO_MENU = 'logo--menu';
  const SEARCH_FORM_MENU = 'search-form--menu';
  const CART_LINK_MENU = 'cart-link--menu';
  const NAVBAR_MENU = 'navbar--menu';
  const NAVBAR_JS = 'navbar--js';
  const BURGER_BTN_JS = 'burger-btn--js';
  const BURGER_BTN_MENU = 'burger-btn--menu';
  const IS_MENU_OPEN = 'is-menu-open';
  const HEADER_MENU_OPEN = 'header-menu--open';
  const burgerBtn = document.querySelector('.burger-btn');
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo');
  const searchForm = document.querySelector('.search-form');
  const cartLink = document.querySelector('.cart-link');
  const navbar = document.querySelector('.navbar');
  const contentCover = document.querySelector('.content-cover');
  const headerCover = document.querySelector('.header-cover');

  function initMenu() {
    if (burgerBtn) {
      burgerBtn.addEventListener('click', burgerBtnClickHandler);
      burgerBtn.classList.toggle(BURGER_BTN_JS);
    }

    if (navbar) {
      navbar.classList.toggle(NAVBAR_JS);
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

    if (navbar) {
      navbar.classList.toggle(NAVBAR_MENU);
    }
  }

  initMenu();

  function burgerBtnClickHandler() {
    if (burgerBtn) {
      contentCover.classList.toggle(IS_MENU_OPEN);
      headerCover.classList.toggle(HEADER_MENU_OPEN);
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

    if (navbar) {
      navbar.classList.toggle(NAVBAR_MENU);
    }
  }
})();

'use strict';

(function () {
  const pageBody = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const loginLinks = document.querySelectorAll('.login-link-js');
  const closeLoginFormBtn = document.querySelector('.login__close');
  const inputFocused = document.querySelector('#useremail');
  const BODY_OVERFLOW = 'body--overflow';
  const MODAL_OPENED = 'modal--opened';
  const MODAL_OVERLAY = 'modal';
  let activeElements = [];
  let maxTabIndexNum;

  function findModalElements() {
    let elements = modal.querySelectorAll('*');
    setActiveElementArray(elements);
  }

  function setActiveElementArray(elements) {
    elements.forEach((element) => {
      let tag = element.tagName;
      if (tag === 'a' || tag === 'input' || tag === 'button' || tag === 'textarea') {
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
      if (modal.classList.contains(MODAL_OPENED)) {
        pageBody.classList.add(BODY_OVERFLOW);
      } else {
        pageBody.classList.remove(BODY_OVERFLOW);
      }

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
  const signupUserEmail = document.querySelector('#usermail');
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
