"use strict";
(function () {
  const form = document.getElementById("myForm");
  const formElements = form.querySelectorAll("input");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.textContent = "";
    formElements.forEach((element) => {
      const describedBy = element.getAttribute("aria-describedby");
      const describedByArray = describedBy.split(/\s+/);

      if (!element.validity.valid) {
        element.setAttribute("aria-invalid", true);
      } else {
        element.setAttribute("aria-invalid", false);
      }

      describedByArray.forEach((id) => {
        const errorSpan = document.getElementById(id);
        const errorSpanValidity = errorSpan.dataset.validity;
        const errorBool = element.validity[errorSpanValidity];
        if (errorBool) {
          errorSpan.hidden = false;
        } else {
          errorSpan.hidden = true;
        }
      });
    });
    const firstInvalid = form.querySelector(":invalid");

    if (firstInvalid) {
      firstInvalid.focus();
    } else {
      form.reset();
      successMessage.textContent =
        "Your information has been submitted successfully.";
    }
  });
})();
