const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Show error message
function showError(input, message) {
  const inputParent = input.parentElement;
  inputParent.className = "form-control1 error";
  const small = inputParent.querySelector("small");
  small.innerText = message;
}

// Show success message
function showSuccess(input) {
  const inputParent = input.parentElement;
  inputParent.className = "form-control1 success";
}

// Checking email validation
function checkEmailValidation(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Checking the subject length
function checkSubjectLength(input, max) {
  if (input.value.length > max) {
    showError(input, `Subject length should be less than ${max} characters`);
  }
}

// Checking whether any field is empty or not
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// After someone clicks on submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([name, email, subject, message]);
  checkEmailValidation(email);
  checkSubjectLength(subject, 30);
});
