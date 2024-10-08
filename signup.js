var reset = $('reset');

reset.on('click', resetForm);

function resetForm(event) {
  //prevents page reload
  event.preventDefault();

  var name = $('name');
  var email = $('email');
  var password = $('password')
  
  //clear input field
  name.val() = "";
  email.val() = "";
  password.val() = "";
}

var submitButton = $('submit');

submitButton.on('click', returnThanks);

function returnThanks() {
  //var name = $('name');

  alert("Thank you for submitting!!");
}