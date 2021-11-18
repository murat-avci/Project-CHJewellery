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
