// eslint-disable-next-line strict
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
