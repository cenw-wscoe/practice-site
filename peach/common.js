function init () {
	console.log ("Initing.");
	setupFocus();
	getLeftNav();
} // End of init


function getRemoteFile (file, callback) {
	var xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET",file,true);
	xmlhttp.onreadystatechange=function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 404) {
				callback("404");
			}
			if (xmlhttp.status == 0 || xmlhttp.status == 200) {
				callback(xmlhttp.responseText);
			}
		}
	}
	xmlhttp.send();
} // end of getRemoteFile

function blurring (e) {
	console.log ("Blurring " + e);
	e.target.removeEventListener("blur", blurring);
	e.target.removeAttribute("style");
} // End of blurring

function throwFocus (e) {
	//alert ("target: " + e.target);
	e.preventDefault();
	var dest = e.target.getAttribute("href").replace("#", "");
	document.location.href += "#"  + dest;
	//console.log ("Trying to get #" + dest + ".");
	try {
		var destObj = null;
		destObj = document.getElementById(dest);
		if (destObj) {
			/*
			console.log ("Got destObj: " + destObj);
			destObj.addEventListener("focus", function (e) {
				console.log ("Just received focus.");
					}, false);
			*/
			destObj.focus();
			//console.log ("Active Element: " + typeof(document.activeElement) + ".");
			//destObj.setAttribute("style", "border: thick solid red;");
			//destObj.addEventListener("blur", blurring, false);
		} else {
			console.error ("Didn't get destObj");
		}

	}
	catch (ex) {
		console.error ("Error: " + ex.toString());
	}
	
	//var target = e.target.replace(/^.*#/, "");
	//e.target.setAttribute("style", "border: thick solid red");
	//e.target.focus();

} // End of throwFocus

function setupFocus() {
	var sls = [];

	sls = document.querySelectorAll(".wb-sl");
	console.log ("Got "  + sls.length + ".");
	for (var i = 0; i < sls.length; i++) {
		//console.log ("el: " + sls[i] + ".");
		sls[i].addEventListener("click", throwFocus, false);
	}
} // End of setupFocus

function genLeftMenu (lm) {
	if (lm != "404") {
		var leftMenu, p = null;
		leftMenu = document.getElementById("siteMenu");
		if (leftMenu) {
			p = leftMenu.getElementsByTagName("p");
			if (p) {
				p = p[0];
				leftMenu.removeChild(p);

				var thisPage = document.location.href.replace(/^.*\//, "");
				
				var pattern = "<li(><a href=\"" + thisPage + "\")";
				var RE = new RegExp(pattern);
				lm = lm.replace(RE, "<li class=\"navcurr\"$1");
				//lm = lm.replace(/<li(><a href="" + thisPage + "")/, "class=\"navcurr\"$1");

				leftMenu.innerHTML += lm;
			} else {
				console.error ("Did not get p.");
			}
		} else {
			console.error ("Did not get siteMenu");
		}
	}
} // End of genLeftMenu


function getLeftNav () {
	getRemoteFile("leftMenu.html", genLeftMenu);
} // End of getLeftNav


document.addEventListener("DOMContentLoaded", init, false);
