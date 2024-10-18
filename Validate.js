var form = document.getElementById("LoginForm");

form.addEventListener("submit", Validate);
function Validate(e) {
  e.preventDefault();
  var email = document.getElementById("exampleInputEmail1");
  var password = document.getElementById("exampleInputPassword1");
  var emalVal = email.value;
  var passVal = password.value;
  var isValidEmail = emalVal.indexOf("@gmail.com");
  if (!email || !passVal) {
    alert("Please enter a valid email address and password");
  } else if (isValidEmail == -1) {
    alert("Email is Not valid");
  } else if (passVal.length < 8) {
    alert("Password must contain at least 8 Long");
  } else if (passVal.search(/[a-z]/) == -1) {
    alert("Password must contain at least one lowercase letter");
  } else if (passVal.search(/[A-Z]/) == -1) {
    alert("Password must contain at least one uppercase letter");
  } else if (passVal.search(/[0-9]/) == -1) {
    alert("Password must contain at least one number");
  } else if (
    passVal.search(/[!\@\#\$\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\;'\,.]/) == -1
  ) {
    alert("Password must contain at least one special character");
  } else if (emalVal === "accimran1@gmail.com" && passVal === "imrankhaN123@") {
    alert("Login Successful");
    window.location.href = "home.html";
  } else if (emalVal != "accimran1@gmail.com") {
    alert("We are not allowed to login with emal");
  } else if (emalVal != "imrankhaN123@") {
    alert("Invalid password");
  } else {
    alert("Invalid email or password");
  }
}
