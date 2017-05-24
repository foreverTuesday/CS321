function confirmFunction(){

	console.log(document.getElementById("bday").value);

	var info = "";

	if (!validateBday()) {
		info = "Sorry, you must be 18 or older to register with us.";
	}
	else if(!validateName()){
		info = "You did not enter a valid first or last name. Please be sure to include at least two letters in each name. Then, try submitting again.";
	}
	else if(!validateEmail()){
		info = "You did not enter a valid email. Please check your email address and submit again.";
	}
	else if(!validatePhone()){
		info = "You did not enter a valid phone number. Please check the number and try again.";
	}
	else if(!validateStreetAddress()){
		info = "You did not enter a valid street address. Please check your house number, street name, etc... and try again.";
	}
	else if(!validateCity()){
	    info = "You did not enter a valid city. Please check your capitalization, spacing, and punctuation. Then, try again."
	}
	else if(!validateZip()){
	    info = "You did not enter a valid US zipcode. Please check your zip code and try again."
	}
	else if(!validateUsername()){
		info = "You did not enter a valid username. It must be at least 6 characters long, and you can only use letters, numbers, and underscores.";
	}
	else if(!validatePassword()){
		info = "Please make sure you enter the same password in the confirmation box and include at least one number, one uppercase, and one lowercase letter";
	}
	else if(!validateSecure()){
		info = "Please provide an answer to the security question";
	}
	else if(!validateAgreement()){
		info = "You must read and agree to the privacy policy and terms and conditions before making an account.";
	}
	else{
		info = collectInfo();
	}
	alert(info);

}

function validateBday(){
	var valid = true;

	var today = new Date().getTime();
	//console.log("TODAY" + today);
	var bday = new Date(document.getElementById("bday").value);
	bday = bday.getTime()
	//console.log(today-bday);

	if(today-bday<568024668000 || bday==""){
		//console.log("too young");
		valid = false;
	}
	return(valid)
}

function validateName(){
	var valid = true;
	var first = document.getElementById("firstname").value;
	var last = document.getElementById("lastname").value;
	first.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	first.replace(/\s+/,"");
	last.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	last.replace(/\s+/,"");
	var validString = /\w{2,}/;
	if(first=="" || !validString.test(first) || last=="" || !validString.test(last)){
		valid = false;
	}
	return(valid);
}

function validateEmail(){
	var valid = true;
	var email = document.getElementById("email").value;
	var validEmail = /[a-zA-Z\d!#$%&\'\*\+\-\/=\?\^_`\{\|\}~]+\.?[a-zA-Z\d!#$%&\'\*\+\-\/=\?\^_`\{\|\}~]+@[a-zA-Z\d]+-?[a-zA-Z\d]+\.[a-zA-Z]+/;
	if(!validEmail.test(email)){
		valid=false;
	}
	return(valid);
}

function validatePhone(){
	var valid = true;
	var phone = document.getElementById("phone1input").value;
	var validPhone = /1?\(?\d{3}\)?\-?\d{3}\-?\d{4}/;
	if(!validPhone.test(phone)){
		valid=false;
	}
	return(valid);
}

function validateStreetAddress(){
	var valid = true;
	var addr1 = document.getElementById("address1").value;
	var addr2 = document.getElementById("address2").value;
	var validAddr = /(\d{1,5}[a-zA-Z]*)(\s+\w{2,})+(\s\w*#?\s?\d*)?/;
	if(!validAddr.test(addr1) && !validAddr.test(addr2)){
		valid = false;
	}
	return(valid)
}

function validateCity(){
    var valid = true;
    var city = document.getElementById("city").value;
    var validCity = /[a-zA-Z]+[\s\.\'\-]?[a-zA-Z]*/;
    if(!validCity.test(city)){
        vaild = false;
    }
    return(valid);
}

function validateZip(){
    var valid = true;
    var zipCode = document.getElementById("zip").value;
    var validZip = /\b\d{5}\b/ ;
    if(!validZip.test(zipCode)){
        valid = false;
    }
    return(valid);
}

function validateUsername(){
	var valid = true;
	var usr = document.getElementById("usr").value;
	var validUsr = /\w{6,}/;
	if(!validUsr.test(usr)){
		valid = false;
	}
	return(valid)
}

function validatePassword(){
	var valid = true;
	var pass = document.getElementById("pw").value;
	var confirm = document.getElementById("pwConf").value;
	if (pass !== confirm){
		valid = false;
	}
	else{
		var validPass1 = /[a-z]/;
		var validPass2 = /[A-Z]/;
		var validPass3 = /\d/;
		if(!validPass1.test(pass) || !validPass2.test(pass) || !validPass1.test(pass)){
			valid=false;
		} 
	}
	return(valid); 
}

function validateSecure(){
	var valid = false;
	var secure = document.getElementById("secAns").value;
	if (secure !== ""){
		valid = true;
	}
	return(valid); 
}

function validateAgreement(){
	return(document.getElementById("terms").checked);
}

function collectInfo(){
	var info = "";

	info="Name: " + document.getElementById("firstname").value + " " + document.getElementById("middlename").value + document.getElementById("lastname").value + "\n";
	info+="DOB: " + document.getElementById("bday").value + "\n";
	info+="Email: " + document.getElementById("email").value + "\n";

	if(document.getElementsByTagName("input")[6].checked){
		info+="Home: " + document.getElementById("phone1input").value + "\n";

		if(document.getElementsByTagName("input")[11].checked){
			info+="Cell: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[16].checked) {
				info+="Work: " + document.getElementById("phone3input").value + "\n";
			}
		}
		else if(document.getElementsByTagName("input")[12].checked){
			info+="Work: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[15].checked) {
				info+="Cell: " + document.getElementById("phone3input").value + "\n";
			}
		}
	}
	else if(document.getElementsByTagName("input")[7].checked){
		info+="Cell: " + document.getElementById("phone1input").value + "\n";

		if(document.getElementsByTagName("input")[10].checked){
			info+="Home: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[16].checked) {
				info+="Work: " + document.getElementById("phone3input").value + "\n";
			}
		}
		else if(document.getElementsByTagName("input")[12].checked){
			info+="Work: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[14].checked) {
				info+="Home: " + document.getElementById("phone3input").value + "\n";
			}
		}

	}
	else if(document.getElementsByTagName("input")[8].checked){
		info+="Work: " + document.getElementById("phone1input").value + "\n";

		if(document.getElementsByTagName("input")[10].checked){
			info+="Home: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[15].checked) {
				info+="Cell: " + document.getElementById("phone3input").value + "\n";
			}
		}
		else if(document.getElementsByTagName("input")[11].checked){
			info+="Cell: " + document.getElementById("phone2input").value + "\n";

			if (document.getElementsByTagName("input")[14].checked) {
				info+="Home: " + document.getElementById("phone3input").value + "\n";
			}
		}
	}
	else{
		info+="Phone: " + document.getElementById("phone1input").value + "\n";
	}

	if (document.getElementById("emailOffers").checked) {
		info+="\nWe will send you email offers!\n";
	}
	else{
		info+="\nWe will NOT send you email offers.\n";
	}

	if (document.getElementById("phoneOffers").checked) {
		info+="We will call you with phone offers!\n";
	}
	else{
		info+="We will NOT call you with phone offers.\n";
	}

	if(document.getElementById("textOffers").checked){
		info+="We will text you with special offers!\n";
	}
	else{
		info+="We will NOT text you with special offers.\n";
	}

	info+="\nAddress: " + document.getElementById("address1").value;
	if(document.getElementById("address2").value!=""){
		info+="\n" + document.getElementById("address2").value + "\n";
	}
	info+=document.getElementById("city").value + ", " + document.getElementById("state").value + " " + document.getElementById("zip").value + "\n";
	info+="\nUsername: " + document.getElementById("usr").value;

	return(info);

}