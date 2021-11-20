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
