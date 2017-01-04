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
    
  function purposeCheck() {
    var checkBoxes = document.getElementsByClassName( 'purpose' );
    var isChecked = false;
      for (var i = 0; i < checkBoxes.length; i++) {
        if ( checkBoxes[i].checked ) {
          isChecked = true;
        };
      };
    if ( isChecked == false ) {
      alert( 'You must select at least one purpose.' );
      return false;
    }   
  }
  
}



