// Code goes here

function show(shown, hidden1, hidden2) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden1).style.display='none';
  document.getElementById(hidden2).style.display='none';
  return false;
}

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
//need to input smartystreets here 
  var numshares = document.forms["myForm"]["numshares"].value;
  if (numshares === "") {
    alert("Number of shares owned must be at least 1");
    return false;
  }
  else if (numshares < 1) {
    alert("Number of shares owned must be at least 1");
    return false;
  }
  
}


$( document ).ready(function() {
    $('#numshares').change(function(){
        $('#o_fname').html($('#fname').val());
        $('#o_lname').html($('#lname').val());
        $('#o_cname').html($('#cname').val());
        $('#o_caddress').html($('#street').val()+$('#city').val()+$('#state').val()+$('#country').val()+$('#zip').val());
        $('#o_numshares').html($('#numshares').val());
        
    });
});

function display(myForm) {
  form.o_fname.value = form.fname.value;
  form.o_lname.value = form.lname.value;
  form.o_cname.value = form.cname.value;
  form.o_numshares.value = form.numshares.value;
  return false;
}

