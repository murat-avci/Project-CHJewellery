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
