function checkValidation() {
	
	var ok = true;
	var re = /^[A-Za-z][A-Za-z0-9]+$/;
	var max = 6;
	var pass = document.getElementById("signin-password").value;
	var username = document.getElementById("signin-name").value;
	
	
	if(!re.test(username)) { 
	
	alert("username must start with a letter");
	document.getElementById("signin-name").style.borderColor = "#E34234";
	ok = false;
	
	}
	
	if(pass.length > max) {
		
	alert("Password too long, maximum number allowed is 6");
	document.getElementById("signin-password").style.borderColor = "#E34234";
	ok = false;	
		
		
		
	}
	
	return ok;

	}
	

	
	