function validateForm(){
    var errors = [];
    var regexp1 = new RegExp('[A-ZŻŹĆĄŚĘŁÓŃ]');
    var regexp2 = new RegExp('[0-9]');
    var regexp3 = /\S+@\S+\.\S+/;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;


    if(fname.length < 3) {
        var error1 = document.getElementById("fname").style.border = "1px solid red";
        errors.push("Zbyt krótkie imię");
    }
    else {
        var error1 = document.getElementById("fname").style.border = "1px solid darkgrey";
    }

    if(fname === lname) {
        var error1 = document.getElementById("fname").style.border = "1px solid red";
        var error2 = document.getElementById("lname").style.border = "1px solid red";
        errors.push("Imię i nazwisko nie mogą być takie same");
    } else if(fname != lname){
        var error1 = document.getElementById("fname").style.border = "1px solid darkgrey";
        var error2 = document.getElementById("lname").style.border = "1px solid darkgrey";
    }

    if(email.match(regexp3)) {
        var error3 = document.getElementById("email").style.border = "1px solid darkgrey";
    }
    else {
        var error3 = document.getElementById("email").style.border = "1px solid red";
        errors.push("Błędny adres e-mail");
    }
    

    if(password.length < 8 || confirmpassword.length < 8 ) {
        var error4 = document.getElementById("password").style.border = "1px solid red";
        var error5 = document.getElementById("confirmpassword").style.border = "1px solid red";
        errors.push("Hasło jest za krótkie");
    }
    else if(password.length > 8 && confirmpassword.length > 8){
        var error4 = document.getElementById("password").style.border = "1px solid darkgrey";
        var error5 = document.getElementById("confirmpassword").style.border = "1px solid darkgrey";
    }

    if(password.match(regexp1)){
        var error4 = document.getElementById("password").style.border = "1px solid darkgrey";
    }
    else {
        var error4 = document.getElementById("password").style.border = "1px solid red";
        errors.push("Hasło nie zawiera dużej litery");
    }

    if(password.match(regexp2)){
        var error4 = document.getElementById("password").style.border = "1px solid darkgrey";
    }
    else {
        var error4 = document.getElementById("password").style.border = "1px solid red";
        errors.push("Hasło nie zawiera cyfry");
    }

    if(password != confirmpassword) {
        var error4 = document.getElementById("password").style.border = "1px solid red";
        var error5 = document.getElementById("confirmpassword").style.border = "1px solid red";
        errors.push("Hasła muszą być takie same");
    }
    else if (password === confirmpassword && password != "" && confirmpassword != ""){
        var error4 = document.getElementById("password").style.border = "1px solid darkgrey";
        var error5 = document.getElementById("confirmpassword").style.border = "1px solid darkgrey";
    }

   if(errors.length === 0){
       alert("Validation ok");
       window.location.reload(true);
   }  
   else {
    error1,
    error2,
    error3,
    error4,
    error5,
    setTimeout(function() {
        alert(errors.join('\n'));
    },5)
    
   }
}