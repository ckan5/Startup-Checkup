// Code goes here


function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  if (fname === "") {
    alert("First name must be filled out");
    return false;
  }
  var lname = document.forms["myForm"]["lname"].value;
  if (lname === "") {
    alert("Last name must be filled out");
    return false;
  }
  var cname = document.forms["myForm"]["cname"].value;
  if (cname === "") {
    alert("Company name must be filled out");
    return false;
  }

  var numshares = document.forms["myForm"]["numshares"].value;
  if (numshares === "") {
    alert("Number of shares owned must be at least 1");
    return false;
  }
  else if (numshares < 1) {
    alert("Number of shares owned must be at least 1");
    return false;
  }
  
  if (letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false) {
    this.setCustomValidity("At least one purpose must be checked.");
  }
  
}



