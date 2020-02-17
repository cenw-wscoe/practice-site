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
					var total = 0, tottot =0;
					var tr = document.createElement("tr");
					tbody.append(tr);
					var dateTD = document.createElement("td");
					dateTD.setAttribute("rowspan", "3");
					dateTD.innerHTML = dte;
					tr.append(dateTD);
					


					if (data[dte].hasOwnProperty("beforeLunch")) {
						var totBL =0, totAL=0, totSN=0, totTC=0, totC=0;
						
						var blTH = document.createElement("th");
						blTH.innerHTML = "Before Lunch";
						tr.append(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = data[dte]["beforeLunch"]["sneezes"];
						tr.append(blsnTD);
						totBL += data[dte]["beforeLunch"]["sneezes"];
						totSN += data[dte]["beforeLunch"]["sneezes"];

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = data[dte]["beforeLunch"]["throatClears"];
						tr.append(bltcTD);
						totBL += data[dte]["beforeLunch"]["throatClears"];
						totTC += data[dte]["beforeLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["beforeLunch"]["coughs"];
						tr.append(cTD);
						totBL += data[dte]["beforeLunch"]["coughs"];
						totC += data[dte]["beforeLunch"]["coughs"];

						var totalBLTD = document.createElement("td");
						totalBLTD.innerHTML = totBL;
						tr.append(totalBLTD);

						//tbody.append(blTR);

						var alTR = document.createElement("tr");
						var alTH = document.createElement("th");
						alTH.innerHTML = "After Lunch";
						alTR.append(alTH);
						
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

						var totalALTD = document.createElement("td");
						totalALTD.innerHTML = totAL;
						alTR.append(totalALTD);

						tbody.append(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("th");
						totTH.innerHTML = "Daily Total";
						totTR.append(totTH);


						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = totSN;
						totTR.append(snTotTD);
						tottot += totSN;

						var tcTotTD = document.createElement("td");
						tcTotTD.innerHTML = totTC;
						totTR.append(tcTotTD);
						tottot += totTC;

						var cTotTD = document.createElement("td");
						cTotTD.innerHTML = totC;
						totTR.append(cTotTD);
						tottot += totC;

						var totalTD = document.createElement("td");
						totalTD.innerHTML = tottot;
						totTR.append(totalTD);
						
						tbody.append(totTR);
						
					} else {
						var blTH = document.createElement("th");
						blTH.innerHTML = "Before Lunch";
						tr.append(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = "0";
						tr.append(blsnTD);

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = "0";
						tr.append(bltcTD);

						var blcTD = document.createElement("td");
						blcTD.innerHTML = "0";
						tr.append(blcTD);

						var totBLTD = document.createElement("td");
						totBLTD.innerHTML = "0";
						tr.append(totBLTD);

						var alTR = document.createElement("tr");
						var alTH = document.createElement("th");
						alTH.innerHTML = "After Lunch";
						alTR.append(alTH);

						var alsnTD = document.createElement("td");
						alsnTD.innerHTML = "0";
						alTR.append(alsnTD);

						var altcTD = document.createElement("td");
						altcTD.innerHTML = "0";
						alTR.append(altcTD);

						var cTD = document.createElement("td");
						cTD.innerHTML = "0";
						alTR.append(cTD);

						var totalALTD = document.createElement("td");
						totalALTD.innerHTML = "0";
						alTR.append(totalALTD);
						tbody.append(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("th");
						totTH.innerHTML = "Daily Total";
						totTR.append(totTH);

						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = data[dte]["sneezes"];
						totTR.append(snTotTD);
						tottot += data[dte]["sneezes"];

						var tcTD = document.createElement("td");
						tcTD.innerHTML = data[dte]["throatClears"];
						totTR.append(tcTD);
						tottot += data[dte]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["coughs"];
						totTR.append(cTD);
						tottot += data[dte]["coughs"];

						var totalTD = document.createElement("td");
						totalTD.innerHTML = tottot;
						totTR.append(totalTD);
						tbody.append(totTR);
					}

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
