function previous() {
  var email = document.getElementsByName("email");
  var password = document.getElementsByName("password");
  var retypepassword = document.getElementsByName("retypepassword");
  var fname = document.getElementsByName("fname");
  var lname = document.getElementsByName("lname");
  var terms = document.getElementById("terms");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  localStorage.setItem('fname',fname[0].value);
  localStorage.setItem('lname',lname[0].value);
  if (
  //   email[0].value &&
    password[0].value &&
    retypepassword[0].value &&
    fname[0].value &&
    lname[0].value&&password[0].value==retypepassword[0].value&&
  email[0].value.match(validRegex)
  ) {
    document.location.href = "../index.html";
  }else{alert("Please enter a valid email address or retype the password");}
 
}
