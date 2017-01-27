
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
    letterform.b1.setCustomValidity("Need to choose at least one purpose.");
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
    letterform.cred.setCustomValidity("")
  }

}

function otherCheck() {
  if (document.getElementById("p5").checked == true) {
      document.getElementById("other").required = true;
      if (document.getElementById("other").value == "") {
      letterform.other.setCustomValidity("Need to state a purpose if you selected this option.");
      }
      else {
        letterform.other.setCustomValidity("");
      }
  }

  else if (document.getElementById("p5").checked==false) {
    document.getElementById("other").required = false;
    letterform.other.setCustomValidity("")
  }

}

function otherCheck2() {
  if (document.getElementById("p6").checked == true) {
      document.getElementById("other2").required = true;
      if (document.getElementById("other2").value == "") {
      letterform.other2.setCustomValidity("Need to state a purpose if you selected this option.");
      }
      else {
        letterform.other2.setCustomValidity("");
      }
  }

  else if (document.getElementById("p6").checked==false) {
    document.getElementById("other2").required = false;
    letterform.other2.setCustomValidity("")
  }

}

function otherCheck3() {
  if (document.getElementById("p7").checked == true) {
      document.getElementById("other3").required = true;
      if (document.getElementById("other3").value == "") {
      letterform.other3.setCustomValidity("Need to state a purpose if you selected this option.");
      }
      else {
        letterform.other3.setCustomValidity("");
      }
  }

  else if (document.getElementById("p7").checked==false) {
    document.getElementById("other3").required = false;
    letterform.other3.setCustomValidity("")
  }

}

function pdfCreate(x) {
    GrabzIt("YWFmNTY4Yjc1NjNmNGY0YThmNjc5N2Q2NTFlOTFlNTg=").ConvertHTML(x, {"format": "pdf", "background": 0}).Create();
} 

function validateForm() {
  if (letterform.attorneyYN.checked == false) {
    letterform.attorneyYN.focus();
    return false
  }

  if (letterform.numshares.value == 0) {
    letterform.numshares.focus();
    return false;
  }

  if(letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false && letterform.p6.checked == false && letterform.p7.checked == false) {
    letterform.p1.focus();
    return false;
  }

if(letterform.owner.value == "") {
  letterform.owner.focus();
  return false;
}

  else {
    return true;
  }

}

window.onpageshow = function() {
  addAttorneyCheck();
  addSharesCheck();
  addPurposeCheck();
  addBookCheck();
  addOwnerCheck();
  crediblePurposeCheck();
  otherCheck();
  otherCheck2();
  otherCheck3();
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
  document.getElementById("p5").addEventListener("change", otherCheck);
  document.getElementById("other").addEventListener("change", otherCheck);
  document.getElementById("p6").addEventListener("change", addPurposeCheck);
  document.getElementById("p6").addEventListener("change", otherCheck2);
  document.getElementById("other2").addEventListener("change", otherCheck2);
  document.getElementById("p7").addEventListener("change", addPurposeCheck);
  document.getElementById("p7").addEventListener("change", otherCheck3);
  document.getElementById("other3").addEventListener("change", otherCheck3);
  document.getElementById("b1").addEventListener("change", addBookCheck);
  document.getElementById("b2").addEventListener("change", addBookCheck);
  document.getElementById("b3").addEventListener("change", addBookCheck);
  document.getElementById("b4").addEventListener("change", addBookCheck);
  document.getElementById("b5").addEventListener("change", addBookCheck);
};