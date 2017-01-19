
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
  if (letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false) {
    letterform.p1.setCustomValidity("Need to choose at least one purpose.");
  }

  else if (letterform.p1.checked == true || letterform.p2.checked == true || letterform.p3.checked == true || letterform.p4.checked == true || letterform.p5.checked == true) {
    letterform.p1.setCustomValidity("");
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

  if(letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false) {
    letterform.p1.focus();
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
  document.getElementById("attorneyYN").addEventListener("change", addAttorneyCheck);
  document.getElementById("numshares").addEventListener("change", addSharesCheck);
  document.getElementById("p1").addEventListener("change", addPurposeCheck);
  document.getElementById("p2").addEventListener("change", addPurposeCheck);
  document.getElementById("p3").addEventListener("change", addPurposeCheck);
  document.getElementById("p4").addEventListener("change", addPurposeCheck);
  document.getElementById("p5").addEventListener("change", addPurposeCheck);
  if(letterform.p1.checked == false && letterform.p2.checked == false && letterform.p3.checked == false && letterform.p4.checked == false && letterform.p5.checked == false) {
    letterform.p1.setCustomValidity("Need to choose at least one purpose.");
  }
  else {
    letterform.p1.setCustomValidity("");
  }
};