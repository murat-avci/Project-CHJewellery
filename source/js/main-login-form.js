'use strict';

(function () {
  let loginUserEmail = document.querySelector('#useremail');
  const USER_EMAIL_KEY = 'usermail';

  function inputLoginEmailBlurHandler() {
    localStorage.setItem(USER_EMAIL_KEY, loginUserEmail.value);
  }

  function initLoginEmailLocalStorage() {
    if (loginUserEmail) {
      loginUserEmail.addEventListener('blur', inputLoginEmailBlurHandler);
    }
  }

  initLoginEmailLocalStorage();
})();
