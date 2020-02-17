function init () {
	console.log ("Initing.");
	getData();
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


function createTable (data) {
	if (data == "404") {
		console.error ("404!");
	} else {
		data = JSON.parse(data);
		console.log ("Got " + data);
		var table, tbody = null;
		table = document.getElementById("throatyMcThroatFaceTable");
		if (table) {
			console.log ("Got table");
			tbody = table.getElementsByTagName("tbody");
			if (tbody) {
				console.log ("Got body");
				tbody=tbody[0];

				for (var dte in data) {
					var total = 0;
					var tr = document.createElement("tr");
					var dateTD = document.createElement("td");
					dateTD.innerHTML = dte;
					tr.append(dateTD);
					


					if (data[dte].hasOwnProperty("beforeLunch")) {
						var totBL, totAL, totSN, totTC, totC = 0;
						dateTD.setAttribute("rowspan", "3");
						
						var blTR = document.createElement("tr");
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = data[dte]["beforeLunch"]["sneezes"];
						blTR.append(blsnTD);
						totBL += data[dte]["beforeLunch"]["sneezes"];
						totSN += data[dte]["beforeLunch"]["sneezes"];

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = data[dte]["beforeLunch"]["throatClears"];
						blTR.append(bltcTD);
						totBL += data[dte]["beforeLunch"]["throatClears"];
						totTC += data[dte]["beforeLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["beforeLunch"]["coughs"];
						blTR.append(cTD);
						totBL += data[dte]["beforeLunch"]["coughs"];
						totC += data[dte]["beforeLunch"]["coughs"];

						var totalBLTD = document.createElement("td");
						totalBLTD.innerHTML = totBL;
						blTR.append(totalBLTD);

						tr.append(blTR);
						

						var alTR = document.createElement("tr");
						
						var alsnTD = document.createElement("td");
						alsnTD.innerHTML = data[dte]["afterLunch"]["sneezes"];
						alTR.append(alsnTD);
						totAL += data[dte]["afterLunch"]["sneezes"];
						totSN += data[dte]["afterLunch"]["sneezes"];

						var altcTD = document.createElement("td");
						altcTD.innerHTML = data[dte]["afterLunch"]["throatClears"];
						alTR.append(altcTD);
						totAL += data[dte]["afterLunch"]["throatClears"];
						totTC += data[dte]["afterLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["afterLunch"]["coughs"];
						alTR.append(cTD);
						totAL += data[dte]["afterLunch"]["coughs"];
						totC += data[dte]["afterLunch"]["coughs"];

						tr.append(alTR);

						var totTR = document.createElement("tr");
						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = totSN;
						totTR.append(snTotTD);

						var tcTotTD = document.createElement("td");
						tcTotTD.innerHTML = totTC;
						totTR.append(tcTotTD);

						var cTotTD = document.createElement("td");
						cTotTD.innerHTML = totC;
						totTR.append(cTotTD);
						
						tr.append(totTR);
						//tr.append(

						
					} else {
						var snTD = document.createElement("td");
						snTD.innerHTML = data[dte]["sneezes"];
						tr.append(snTD);
						total += data[dte]["sneezes"];

						var tcTD = document.createElement("td");
						tcTD.innerHTML = data[dte]["throatClears"];
						tr.append(tcTD);
						total += data[dte]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["coughs"];
						tr.append(cTD);
						total += data[dte]["coughs"];

						var totalTD = document.createElement("td");
						totalTD.innerHTML = total;
						tr.append(totalTD);

					}

					tbody.append(tr);
				}
			} else {
				console.log ("Didn't get tbody");
			}

		} else {
			console.log ("Did not get table.");
		}
	}
} // End of createTable

function getData () {
	//var prefix = "/~/andrewnordlund/practice-site";
	var prefix = "..";
	console.log ("Getting: " + prefix + "/data/tmctf.json");

	getRemoteFile(prefix + "/data/tmctf.json", createTable);

} // End of getData




document.addEventListener("DOMContentLoaded", init, false);
