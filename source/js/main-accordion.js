/* eslint-disable no-invalid-this */
// eslint-disable-next-line strict
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
