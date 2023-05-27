"use strict";
import "../sass/main.scss";
import iconSuccess from "../assets/images/icon-success.svg";

(function () {
  const topContainer = document.querySelector(".main-contents");
  const inputEmail = document.querySelector(".input-email");
  const btnSubmit = document.querySelector(".btn-submit");
  const outputMsg = document.querySelector(".error-message");
  let userValidEmail;

  //validating the input
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/;

    return emailRegex.test(email);
  };

  //submit button funtionality
  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    let message = "";
    const userEmail = inputEmail.value;

    if (userEmail === "") {
      message = "Please enter your email!";
      outputDesign("error");
    } else if (validateEmail(userEmail)) {
      message = "Thank you for subscribing!";
      outputDesign("success");
      inputEmail.value = "";
    } else {
      message = "Please, provide a valid email!";
      outputDesign("error");
    }
    return (outputMsg.textContent = message);
  });

  //success message
  const renderSuccess = function () {
    let markup = `
  <section class="success-view">
  <div class="success-contents">
  <div class="success-info" >
    <img src="${iconSuccess}" alt="Success icon" />
    <h1>Thanks for subscribing!</h1>
    <p>
      A confirmation email has been sent to <span class="user-email-output">${userValidEmail}</span>. Please
      open it and click the button inside to confirm your subscription.
    </p>
  </div>

  <button class="btn btn-dismiss" type="button">Dismiss message</button>
  </div>
</section>
    
    `;

    topContainer.innerHTML = markup;
    const btnDismiss = document.querySelector(".btn-dismiss");

    btnDismiss.addEventListener("click", function () {
      location.reload();
    });
    return;
  };

  //designing the elements
  const outputDesign = function (status) {
    if (status === "error") {
      inputEmail.classList.add("error");
    } else if (status === "success") {
      userValidEmail = inputEmail.value;
      inputEmail.value = "";
      renderSuccess();
    }
  };
})();
