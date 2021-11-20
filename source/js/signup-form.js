'use strict';

(function () {
  let signupUserEmail = document.querySelector('#usermail');
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
