function validateForm() {
    let x = document.forms["email-form"]["email"].value;
    if (x == "") {
      console.log("hehe");
      return false;
    }
  }