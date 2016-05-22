function checkValidation(){ 
    var pass1 = document.getElementById("signup-password").value;
    var pass2 = document.getElementById("signup-password-confirm").value;
	var username = document.getElementById("signup-name").value;
    var ok = true;
	var re = /^[A-Za-z][A-Za-z0-9]+$/;
	var max = 6;
	var userTypes = document.getElementsByName("type");
	
	if (!re.test(username)){ 
	
	      alert("Username must start with an alphabet");
		  document.getElementById("signup-name").style.borderColor = "#E34234";
	      ok = false; 
		  
		  }
	

    if (pass1 != pass2) {
        alert("Passwords Do not match");
        document.getElementById("signup-password").style.borderColor = "#E34234";
        document.getElementById("signup-password-confirm").style.borderColor = "#E34234";
		
		
        ok = false;
		
    }else if (pass1.length > max || pass2.length > max) { 
	
	        alert("Password too long, maximum number allowed is 6");
			document.getElementById("signup-password").style.borderColor = "#E34234";
            document.getElementById("signup-password-confirm").style.borderColor = "#E34234";
	        ok = false;
	
	
	
	  }
	
	
	
	if(userTypes[0].checked == false && userTypes[1].checked == false) {
		
	  alert("Please choose either Patient or Doctor");
	  ok = false;
	  	
	}
	
    return ok;
}

