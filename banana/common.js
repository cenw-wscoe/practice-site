let dbug = false;
function init () {
	let params = (new URL(document.location)).searchParams;
	if (params.get("dbug")) {
		if (params.get("dbug") == "true") dbug = true;
	}

	if (dbug) console.log ("Initing.");
	setupFocus();
	//getLeftNav();
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
	if (dbug) console.log ("Blurring " + e);
	e.target.removeEventListener("blur", blurring);
	e.target.removeAttribute("style");
} // End of blurring

function throwFocus (e) {
	e.preventDefault();
	var dest = e.target.getAttribute("href").replace("#", "");
	document.location.href += "#"  + dest;
	try {
		var destObj = null;
		destObj = document.getElementById(dest);
		if (destObj) {
			destObj.focus();
		} else {
			console.error ("Didn't get destObj");
		}

	}
	catch (ex) {
		console.error ("Error: " + ex.toString());
	}
} // End of throwFocus

function setupFocus() {
	var sls = [];

	sls = document.querySelectorAll(".wb-sl");
	if (dbug) console.log ("Got "  + sls.length + ".");
	for (var i = 0; i < sls.length; i++) {
		//if (dbug) console.log ("el: " + sls[i] + ".");
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
				
				var pattern = "<li(><a href=\"" + thisPage + "\">.*?)<\/a>";
				var RE = new RegExp(pattern);
				//lm = lm.replace(RE, "<li class=\"navcurr\"$1<span class=\"wb-inv invisibleStuff\"> this page</span></a>");

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
