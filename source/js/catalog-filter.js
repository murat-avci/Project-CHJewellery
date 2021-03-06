'use strict';

(function () {
  const pageBody = document.querySelector('body');
  const filterBlock = document.querySelector('.popup-filter');
  const closeFilterBtn = document.querySelector('.popup-filter__close');
  const openFilterBtn = document.querySelector('.catalog__filter-link');
  const POPUP_FILTER_OPENED = 'popup-filter--opened';
  // const FILTER_OPENED = 'filter--opened';
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
      filterBlock.classList.toggle(POPUP_FILTER_OPENED);
      if (filterBlock.classList.contains(POPUP_FILTER_OPENED)) {
        pageBody.classList.add(BODY_OVERFLOW);
      } else {
        pageBody.classList.remove(BODY_OVERFLOW);
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
    filterBlock.classList.toggle(POPUP_FILTER_OPENED);
    pageBody.classList.toggle(BODY_OVERFLOW);
    window.removeEventListener('keydown', escapeHAndler);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    resetTabindexActiveElements();
  }
})();
