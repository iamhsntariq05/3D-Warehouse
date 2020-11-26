function Checked(){
    var name;
    var email;
    var x;
    name = document.getElementById("contact_name").value;
    email = document.getElementById("contact_email").value;

    if (name == "" || phoneno < 11) {
        x = "invalid information";
        alert("Name or Email may not be correct")

    }
    else {

        window.location.replace("3DMStore.html");
        alert("Information Collected successfully")

    }



}
function Signincheck() {
    var pass1;
    var pass2;
    var phone;
    
  var val;
    pass1 = document.getElementById("password").value;
    pass2 = document.getElementById("Cpassword").value;
    phone = document.getElementById("phone").value;

    if (pass1 != pass2 || phone == "") {
       
        alert("Invalid information!")


    }
   
    else{

        window.location.replace("3DMStore.html");
        alert("Information Collected successfully")

    }



}


