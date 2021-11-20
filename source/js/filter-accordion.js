'use strict';

(function () {
  let accordionBlock = document.querySelector('.filter__form');
  const FIELD_CLASS = 'filter-field';
  const TOGGLE_CLASS = 'filter-field__toggle';
  const FIELD_CLOSED_CLASS = 'filter-field--closed';

  if (accordionBlock) {
    let accordionToggles = accordionBlock.querySelectorAll('.' + TOGGLE_CLASS);
    let accordionFields = accordionBlock.querySelectorAll('.' + FIELD_CLASS);
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
