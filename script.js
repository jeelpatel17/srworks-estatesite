let submitBtn = document.getElementById("formSubmitBtn");
let backToTop = document.getElementById("backToTop");

// FOR 'BACK-TO-TOP' BUTTON
backToTop.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

// TO PREVENT PAGE RELOAD WHEN FORM IS SUBMITTED AND DISPLAY AN ALERT TO THE USER
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameInp = document.getElementById("name");
  let email = document.getElementById("email");
  let textarea = document.getElementById("textarea");
  let nameError = document.getElementById("nameError");
  let mailError = document.getElementById("mailError");
  let msgError = document.getElementById("msgError");

  if (nameInp.value && email.value && textarea.value) {
    alert("Your form is successfully submitted!");

    // REMOVING ANY ERROR MESSAGES FROM THE LABELS AFTER FORM VALIDATION
    Array.from(document.getElementsByClassName("errorMsg")).forEach(
      (e) => (e.style.display = "none")
    );
  } else {
    //   TO VALIDATE THE FORM INPUTS
    !nameInp.value.length
      ? (nameError.style.display = "inline")
      : (nameError.style.display = "none");

    !email.value.length
      ? (mailError.style.display = "inline")
      : (mailError.style.display = "none");

    !textarea.value.length
      ? (msgError.style.display = "inline")
      : (msgError.style.display = "none");
  }
});
