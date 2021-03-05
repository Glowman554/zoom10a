function encrypt(what, pass) {
	var encrypt = [];

	what.split("").forEach(element => {
		encrypt.push(element.charCodeAt(0) + pass * 500);
	});

	return encrypt;
}

function decrypt(what, pass) {
	var decrypt = "";

	what.forEach(element => {
		decrypt += String.fromCharCode(element - pass * 500);
	});

	return decrypt;
}

function recrypt(what, passwd, passwd_old) {
	var t = decrypt(what, passwd_old);
	var done = encrypt(t, passwd);
	return done;
}

function get_passwd(text) {
	var p = prompt(text);
	var passwd_new = 0;
	p.split("").forEach(element => {
		passwd_new += element.charCodeAt(0);
	});
	return passwd_new;
}

//Get password on page load


var passwd = get_passwd("Password: ");


//Decrypt automatic text

var text = [
	[363071,363101,363115,363099,363104,363105,363099,363104,363116,363101,363058,363010,363104,363116,363116,363112,363115,363058,363047,363047,363122,363111,363111,363109,363046,363117,363115,363047,363106,363047,363055,363050,363049,363056,363055,363054,363055,363055,363053,363050,363063,363112,363119,363100,363061,363077,363105,363116,363085,363078,363085,363100,363073,363077,363084,363104,363080,363099,363109,363112,363115,363077,363110,363100,363106,363100,363109,363086,363121,363089,363088,363078,363050,363085,363084,363048,363057,363010,363077,363101,363101,363116,363105,363110,363103,363045,363073,363068,363058,363032,363055,363050,363049,363032,363056,363055,363054,363032,363055,363055,363053,363050,363010,363075,363101,363110,363110,363099,363111,363100,363101,363058,363032,363087,363105,363099,363107,363101,363114],
	[363071,363101,363111,363032,363047,363032,363087,363066,363083,363032,363047,363032,363071,363075,363010,363104,363116,363116,363112,363115,363058,363047,363047,363117,363115,363048,363050,363119,363101,363098,363046,363122,363111,363111,363109,363046,363117,363115,363047,363106,363047,363056,363057,363052,363057,363056,363054,363057,363048,363052,363057,363057,363063,363112,363119,363100,363061,363079,363072,363107,363120,363084,363068,363086,363081,363090,363088,363086,363048,363079,363085,363074,363108,363082,363110,363070,363117,363098,363121,363115,363119,363090,363107,363049,363083,363100,363122,363048,363057,363010,363077,363101,363101,363116,363105,363110,363103,363045,363073,363068,363058,363032,363056,363057,363052,363032,363057,363056,363054,363057,363032,363048,363052,363057,363057,363010,363075,363101,363110,363110,363099,363111,363100,363101,363058,363032,363055,363069,363104,363101,363049,363087]
]

text.forEach(element => {

	var node = document.createElement("div")

	decrypt(element, passwd).split("\n").forEach(element2 => {

		if(element2.startsWith("https://zoom.us/") || element2.startsWith("https://us02web.zoom.us/")) {
			var new_node = document.createElement("a");
			new_node.setAttribute("href", element2);
			new_node.text = "Open Zoom";
			node.appendChild(new_node);
		} else {
			node.appendChild(document.createTextNode(element2));
		}
		node.appendChild(document.createElement("br"));
	});
	node.appendChild(document.createElement("br"));
	document.getElementById("text").appendChild(node);
});

//Event handler

document.getElementById("encrypt").onclick = () => {
	var what = prompt("Text to encrypt");
	var done = encrypt(what, passwd);
	navigator.clipboard.writeText(done);
	alert(done);
}

document.getElementById("decrypt").onclick = () => {
	var what = prompt("Text to decrypt");
	var done = decrypt(what.split(","), passwd);
	alert(done);
}

document.getElementById("show").onclick = () => {
	var t = document.getElementsByClassName("tools")

	for(var i = 0; i < t.length; i++) {
		t[i].setAttribute("style", "");
	}
}