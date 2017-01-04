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
  
  if (letterform.attorneyYN.checked == true) {
    alert("This site is not meant for those with attorneys. Please verify that you do not have an attorney.");
    letterform.attorneyYN.focus();
    return false;
  }
  
  if (letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false) {
    alert("At least one purpose must be checked.");
    letterform.p5.focus();
    return false;
  }
  
}



