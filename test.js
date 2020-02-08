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
    showError(input, `Maximum of ${max} characters is valid`);
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
  var bdy = name.value + email.value + subject.value + message.value;
  console.log(bdy);

  Email.send({
    SecureToken: "53e530f5-e8b0-4be4-93cb-c05b1f807826",
    To: "amit1291997@gmail.com",
    From: "amit1291997@gmail.com",
    Subject: subject.value,
    Body: bdy
  }).then(message => alert(message));
});

//  Going from bottom to top of the page button

// window.onload = function() {
//   var windowHeight = document.body.clientHeight;
//   var docHeight;
//   docHeight = getDocHeight();
//   var scrollTop = document.body.scrollTop;
//   var trackLength = docHeight - windowHeight;
//   console.log(trackLength);
//   if (trackLength == 0) {
//     document.getElementById("bottomtotop").style.display = "block";
//   } else {
//     document.getElementById("bottomtotop").style.display = "none";
//   }
// };
// function getDocHeight() {
//   var D = document;
//   return Math.max(
//     D.body.scrollHeight,
//     D.documentElement.scrollHeight,
//     D.body.offsetHeight,
//     D.documentElement.offsetHeight,
//     D.body.clientHeight,
//     D.documentElement.clientHeight
//   );
// }

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  currScrollPos = window.pageYOffset;
  if (this.prevScrollPos > currScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-5rem";
  }
  this.prevScrollPos = currScrollPos;
};
