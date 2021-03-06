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
