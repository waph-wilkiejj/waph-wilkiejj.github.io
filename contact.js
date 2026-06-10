var shown = false;
			function showHideContact(){
				if (shown){
					document.getElementById('contact').innerHTML = "Show Contact Information";
					shown = false;
				}else{
					var emailAddress = "<a href='mailto:wilkiejj" + "@" + "mail.uc.edu'>wilkiejj" + "@" + "mail.uc.edu</a>";
 				   	var phoneNumber = "<a href='tel:" + "+" + "15024159814'>" + "+" + "1 502-415-9814</a>";
					document.getElementById('contact').innerHTML= "Email: " + emailAddress + " | Phone: " + phoneNumber;
					shown = true;
				}
			}
