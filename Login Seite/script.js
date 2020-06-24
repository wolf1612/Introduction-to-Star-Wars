function sendData() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "http://localhost:3000/users", true);

	//Send the proper header information along with the request
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	xmlhttp.send(JSON.stringify({
		"username":username,
		"email":email,
		"password":password
	}));
}

function logIn() {
	//user gibt username und password ein und wenn die beiden mit denen in der json
	//datei übereinstimmen kann er weiter
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var url = "db.json";
	var serverPassword;
	var serverUsername;
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText); //Ich möchte hier ein array aus usern bekommen wo username und passwort drinnen sind
			
			for(var i = 0; i < myArr.length; i++)
			{
				serverUsername = myArr[4].username;
				serverPassword = myArr[4].password;
				
				if(serverUsername === username && serverPassword === password)
				{
					alert("Willkommen zurück " + username + " aka " + "junger Padawan");//rang); rang kann dann jedi meister oder padawan sein
					window.open('../_Home/index.html'); 
					window.close();
				}
				break;
			}
			
			//wenn er alle user durch ist und user nicht gefunden wurde
			if(serverUsername != username || serverPassword != password)
			{
				alert("Checke ob alles richtig eingegeben wurde!");
			}
			
			//myFunction(myArr);
		}
	};
	xhr.open('GET', "http://localhost:3000/users", true);
    xhr.responseType = 'text'; //'text' or '' nicht 'json'
    xhr.send();
}

function myFunction(arr) {
	var output = "";
	var i = 0;
	for(i = 0; i < arr.length; i++) {
		output += arr[i].url + '<br>';
	}
	document.getElementById("was").innerHTML = output;
}