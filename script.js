//These following "Check" functions add a custom validity message for each item on the HTML form if it is required but the user has not provided the required input.
function addAttorneyCheck() {
  if (letterform.attorneyYN.checked == false) {
    letterform.attorneyYN.setCustomValidity("This site is not meant for those with attorneys. Please verify that you do not have an attorney.");
  }

  else if (letterform.attorneyYN.checked == true) {
    letterform.attorneyYN.setCustomValidity("");
  }
}

function addSharesCheck() {
  if (letterform.numshares.value == 0) {
    letterform.numshares.setCustomValidity("Need more than 0 shares.");
  }

  else if (letterform.numshares.value > 0) {
    letterform.numshares.setCustomValidity("");
  }
}

function addPurposeCheck() {
  if (letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false && letterform.p6.checked == false && letterform.p7.checked == false) {
    letterform.p1.setCustomValidity("Need to choose at least one purpose.");
  }

  else if (letterform.p1.checked == true || letterform.p2.checked == true || letterform.p3.checked == true || letterform.p4.checked == true || letterform.p5.checked == true || letterform.p6.checked == true || letterform.p7.checked == true) {
    letterform.p1.setCustomValidity("");
  }
}

function addBookCheck() {
  if (letterform.b1.checked == false && letterform.b2.checked == false && letterform.b3.checked == false && letterform.b4.checked == false && letterform.b5.checked == false && letterform.b6.checked == false && letterform.b7.checked == false && letterform.b8.checked == false) {
    letterform.b1.setCustomValidity("Need to choose at least one type of document.");
  }

  else if (letterform.b1.checked == true || letterform.b2.checked == true || letterform.b3.checked == true || letterform.b4.checked == true || letterform.b5.checked == true || letterform.b6.checked == true || letterform.b7.checked == true || letterform.b8.checked == true) {
    letterform.b1.setCustomValidity("");
  }
}

function addOwnerCheck() {
  if (letterform.owner.value == "") {
    letterform.owner.setCustomValidity("Need to choose type of ownership.");
  }

  else if (letterform.owner.value != "") {
    letterform.owner.setCustomValidity("");
  }
}

function crediblePurposeCheck() {
  if (document.getElementById("p1").checked == true) {
    document.getElementById("cred").required = true;
    if (document.getElementById("cred").value == "") {
      letterform.cred.setCustomValidity("Need to state a credible purpose.");
    }
    else {
      letterform.cred.setCustomValidity("");
    }
  }

  else if (document.getElementById("p1").checked==false) {
    document.getElementById("cred").required = false;
    letterform.cred.setCustomValidity("");
  }

}

function otherCheck(p, other) {
  if (document.getElementById(p).checked == true) {
    document.getElementById(other).required = true;
    if (document.getElementById(other).value == "") {
      letterform[other].setCustomValidity("Need to fill this in if you selected this option.");
    }
    else {
      letterform[other].setCustomValidity("");
    }
  }

  else if (document.getElementById(p).checked==false) {
    document.getElementById(other).required = false;
    letterform[other].setCustomValidity("");
  }

}

function dateCheck(b, from, to) {
  /*if (b == "b1") {
    if (document.getElementById("b1").checked == true) {
      document.getElementById(from).required = true;
      document.getElementById(to).required = true;
      if (document.getElementById(from).value == "" || document.getElementById(to).value == "") {
      letterform[b].setCustomValidity("Need to choose an appropriate date range for this option.");
      }
      else {
        letterform[b].setCustomValidity("");
      }
    }

    else {
      addBookCheck();
    }
  }*/

 if (document.getElementById(b).checked == true) {
    document.getElementById(from).required = true;
    document.getElementById(to).required = true;
    if (document.getElementById(from).value == "" || document.getElementById(to).value == "") {
      letterform[b].setCustomValidity("Need to choose an appropriate date range for this option.");
    }
    else {
      letterform[b].setCustomValidity("");
    }
  }
  
  else if (document.getElementById(b).checked == false) {
    document.getElementById(from).required = false;
    document.getElementById(to).required = false;
    letterform[b].setCustomValidity("");
    addBookCheck();
  }
}

//Puts all the forms in their original position after reset of the form
function resetCheck() {
  letterform.attorneyYN.setCustomValidity("This site is not meant for those with attorneys. Please verify that you do not have an attorney.");
  letterform.numshares.setCustomValidity("Need more than 0 shares.");
  letterform.p1.setCustomValidity("Need to choose at least one purpose.");
  letterform.b1.setCustomValidity("Need to choose at least one type of document.");
  letterform.owner.setCustomValidity("Need to choose type of ownership.");
  letterform.cred.setCustomValidity("");
  letterform.other.setCustomValidity("");
  letterform.other2.setCustomValidity("");
  letterform.other3.setCustomValidity("");
  letterform.otherb.setCustomValidity("");
  letterform.otherb2.setCustomValidity("");
  letterform.otherb3.setCustomValidity("");
  letterform.b2.setCustomValidity("");
  letterform.b3.setCustomValidity("");
  letterform.b4.setCustomValidity("");
  letterform.b5.setCustomValidity("");
  letterform.b6.setCustomValidity("");
  letterform.b7.setCustomValidity("");
  letterform.b8.setCustomValidity("");
  document.getElementById("cred").required = false;
  document.getElementById("other").required = false;
  document.getElementById("other2").required = false;
  document.getElementById("other3").required = false;
  document.getElementById("otherb").required = false;
  document.getElementById("otherb2").required = false;
  document.getElementById("otherb3").required = false;
  document.getElementById("from1").required = false;
  document.getElementById("from2").required = false;
  document.getElementById("from3").required = false;
  document.getElementById("from4").required = false;
  document.getElementById("from5").required = false;
  document.getElementById("from6").required = false;
  document.getElementById("from7").required = false;
  document.getElementById("from8").required = false;
  document.getElementById("to1").required = false;
  document.getElementById("to2").required = false;
  document.getElementById("to3").required = false;
  document.getElementById("to4").required = false;
  document.getElementById("to5").required = false;
  document.getElementById("to6").required = false;
  document.getElementById("to7").required = false;
  document.getElementById("to8").required = false;
}

//This adds all of the custom validity messages and adds event handlers that checks whenever the user changes an entry on the page
window.onpageshow = function() {
  addAttorneyCheck();
  addSharesCheck();
  addPurposeCheck();
  addBookCheck();
  addOwnerCheck();
  crediblePurposeCheck();
  otherCheck("p5", "other");
  otherCheck("p6","other2");
  otherCheck("p7","other3");
  otherCheck("b6", "otherb");
  otherCheck("b7","otherb2");
  otherCheck("b8","otherb3");
  dateCheck("b1","from1","to1");
  dateCheck("b2","from2","to2");
  dateCheck("b3","from3","to3");
  dateCheck("b4","from4","to4");
  dateCheck("b5","from5","to5");
  dateCheck("b6","from6","to6");
  dateCheck("b7","from7","to7");
  dateCheck("b8","from8","to8");
  document.getElementById("attorneyYN").addEventListener("change", addAttorneyCheck);
  document.getElementById("numshares").addEventListener("change", addSharesCheck);
  document.getElementById("owner").addEventListener("change", addOwnerCheck);
  document.getElementById("p1").addEventListener("change", addPurposeCheck);
  document.getElementById("cred").addEventListener("change",crediblePurposeCheck);
  document.getElementById("p1").addEventListener("change", crediblePurposeCheck);
  document.getElementById("p2").addEventListener("change", addPurposeCheck);
  document.getElementById("p3").addEventListener("change", addPurposeCheck);
  document.getElementById("p4").addEventListener("change", addPurposeCheck);
  document.getElementById("p5").addEventListener("change", addPurposeCheck);
  document.getElementById("p5").addEventListener("change", function() {otherCheck("p5","other")});
  document.getElementById("other").addEventListener("change", function() {otherCheck("p5","other")});
  document.getElementById("p6").addEventListener("change", addPurposeCheck);
  document.getElementById("p6").addEventListener("change", function() {otherCheck("p6","other2")});
  document.getElementById("other2").addEventListener("change", function() {otherCheck("p6","other2")});
  document.getElementById("p7").addEventListener("change", addPurposeCheck);
  document.getElementById("p7").addEventListener("change", function() {otherCheck("p7","other3")});
  document.getElementById("other3").addEventListener("change", function() {otherCheck("p7","other3")});
  document.getElementById("b1").addEventListener("change", addBookCheck);
  document.getElementById("b1").addEventListener("change", function() {dateCheck("b1","from1","to1")});
  document.getElementById("b2").addEventListener("change", addBookCheck);
  document.getElementById("b2").addEventListener("change", function() {dateCheck("b2","from2","to2")});
  document.getElementById("b3").addEventListener("change", addBookCheck);
  document.getElementById("b3").addEventListener("change", function() {dateCheck("b3","from3","to3")});
  document.getElementById("b4").addEventListener("change", addBookCheck);
  document.getElementById("b4").addEventListener("change", function() {dateCheck("b4","from4","to4")});
  document.getElementById("b5").addEventListener("change", addBookCheck);
  document.getElementById("b5").addEventListener("change", function() {dateCheck("b5","from5","to5")});
  document.getElementById("b6").addEventListener("change", addPurposeCheck);
  document.getElementById("b6").addEventListener("change", function() {dateCheck("b6","from6","to6")});
  document.getElementById("b6").addEventListener("change", function() {otherCheck("b6","otherb")});
  document.getElementById("otherb").addEventListener("change", function() {otherCheck("b6","otherb")});
  document.getElementById("b7").addEventListener("change", addPurposeCheck);
  document.getElementById("b7").addEventListener("change", function() {dateCheck("b7","from7","to7")});
  document.getElementById("b7").addEventListener("change", function() {otherCheck("b7","otherb2")});
  document.getElementById("otherb2").addEventListener("change", function() {otherCheck("b7","otherb2")});
  document.getElementById("b8").addEventListener("change", addPurposeCheck);
  document.getElementById("b8").addEventListener("change", function() {dateCheck("b8","from8","to8")});
  document.getElementById("b8").addEventListener("change", function() {otherCheck("b8","otherb3")});
  document.getElementById("otherb3").addEventListener("change", function() {otherCheck("b8","otherb3")});
};


