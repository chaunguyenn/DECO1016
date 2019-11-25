function myFunction() {
  var x, text;

  // Get the value of the input field with different IDs
  x = document.getElementById("address").value;

  if (x="") {
    text = "Information is required";
  } else {
    text = "";
  }
  document.getElementById("address").innerHTML = text;
  document.getElementById("address2").innerHTML = text;
  document.getElementById("country").innerHTML = text;
  document.getElementById("state").innerHTML = text;
  document.getElementById("zip").innerHTML = text;
  document.getElementById("cc-name").innerHTML = text;
  document.getElementById("cc-number").innerHTML = text;
  document.getElementById("cc-expiration").innerHTML = text;
  document.getElementById("cc-cvv").innerHTML = text;
}

function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())




// Above adapted from https://getbootstrap.com/docs/4.3/examples/checkout/
// Above adapted from https://www.w3schools.com/js/js_validation.asp/
// Above adapted from https://getbootstrap.com/docs/4.3/examples/checkout/


