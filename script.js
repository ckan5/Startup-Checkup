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
  if (letterform.b1.checked == false && letterform.b2.checked == false && letterform.b3.checked == false && letterform.b4.checked == false && letterform.b5.checked == false) {
    letterform.b1.setCustomValidity("Need to choose at least one type of document.");
  }

  else if (letterform.b1.checked == true || letterform.b2.checked == true || letterform.b3.checked == true || letterform.b4.checked == true || letterform.b5.checked == true) {
    letterform.b1.setCustomValidity("");
  }
}

function addOwnerCheck() {
  if (letterform.owner.value == "") {
    letterform.owner.setCustomValidity("Need to choose type of ownership.")
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
      letterform.other.setCustomValidity("Need to state a purpose if you selected this option.");
    }
    else {
      letterform.other.setCustomValidity("");
    }
  }

  else if (document.getElementById(p).checked==false) {
    document.getElementById(other).required = false;
    letterform.other.setCustomValidity("");
  }

}

function pdfCreate(x) {
    GrabzIt("YWFmNTY4Yjc1NjNmNGY0YThmNjc5N2Q2NTFlOTFlNTg=").ConvertHTML(x, {"format": "pdf", "background": 0}).Create();
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
  document.getElementById("b2").addEventListener("change", addBookCheck);
  document.getElementById("b3").addEventListener("change", addBookCheck);
  document.getElementById("b4").addEventListener("change", addBookCheck);
  document.getElementById("b5").addEventListener("change", addBookCheck);
};