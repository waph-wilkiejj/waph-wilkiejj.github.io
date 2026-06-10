var shown = false;
function showHideContact(){
	if (shown){
		document.getElementById('email').innerHTML = "Show Email Address";
    document.getElementById('phone').innerHTML = "Show Phone Number";
		shown = false;
	}else{
		var emailAddress = "<a href='mailto:wilkiejj@mail.uc.edu'>wilkiejj@mail.uc.edu</a>";
    var phoneNumber = "<a href='tel:+15024159814'>+1 502-415-9814</a>";
		document.getElementById('email').innerHTML= emailAddress;
    document.getElementById('phone').innerHTML = phoneNumber;
		shown = true;
	}
}
