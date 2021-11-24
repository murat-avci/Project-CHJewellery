'use strict';

(function () {
  const filterBlock = document.querySelector('.filter');
  const closeFilterBtn = document.querySelector('.filter__close');
  const openFilterBtn = document.querySelector('.catalog__filter-link');
  const FILTER_OPENED = 'filter--opened';
  const windowBlocker = document.querySelector('.window-blocker');
  const WINDOW_UNBLOCK = 'window--unblock';

  function initFilter() {
    if (filterBlock && openFilterBtn) {
      openFilterBtn.addEventListener('click', openFilterBtnHandler);
      window.addEventListener('keydown', escapeHAndler);

      if (filterBlock.classList.contains(FILTER_OPENED)) {
        windowBlocker.classList.add(WINDOW_UNBLOCK);
      } else {
        windowBlocker.classList.remove(WINDOW_UNBLOCK);
      }
    }
  }

  function closeFilterBtnHandler() {
    filterBlock.classList.toggle(FILTER_OPENED);
    closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    windowBlocker.classList.remove(WINDOW_UNBLOCK);
  }

  function windowBlockerHandler() {
    filterBlock.classList.remove(FILTER_OPENED);
    windowBlocker.classList.remove(WINDOW_UNBLOCK);
  }

  function escapeHAndler(evt) {
    if (evt.code === 'Escape') {
      evt.preventDefault();
      windowBlockerHandler();
    }
  }

  function changeFilterState() {
    if (filterBlock.classList.contains(FILTER_OPENED)) {
      closeFilterBtn.removeEventListener('click', closeFilterBtnHandler);
    } else {
      closeFilterBtn.addEventListener('click', closeFilterBtnHandler);
      windowBlocker.classList.add(WINDOW_UNBLOCK);
    }

    filterBlock.classList.toggle(FILTER_OPENED);
  }

  function openFilterBtnHandler(evt) {
    evt.preventDefault();
    changeFilterState();
  }

  initFilter();
})();
