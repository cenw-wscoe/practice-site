//let dbug = false;
let full = false;

function createTable (data) {
	if (data == "404") {
		console.error ("404!");
	} else {
		data = JSON.parse(data);
		if (dbug) console.log ("Got " + data);
		var table = null;
		table = document.getElementById("throatyMcThroatFaceTable");
		if (table) {
			if (dbug) console.log ("Got table");
	
				let full = false;
				let params = (new URL(document.location)).searchParams;
				if (params.get("full")) {
					// Do stuff
					if (params.get("full") == "true") full = true;
				}


				var blsntot = 0, alsntot = 0, totsntot=0;
				var bltctot = 0, altctot = 0, tottctot=0;
				var blctot = 0, alctot = 0, totctot=0;
				var blsnMax = 0, alsnMax = 0, dtotsnMax = 0;
				var bltcMax = 0, altcMax = 0, dtottcMax = 0;
				var blcMax = 0, alcMax = 0, dtotcMax = 0;
				var blMax = 0, alMax = 0, totMax = 0;
				var totalDays = 0;

				for (var dte in data) {
					if (!full && !dte.match(/5$/)) continue;

					totalDays++;
					var total = 0, tottot =0;
					var tr = document.createElement("tr");
					table.appendChild(tr);
					var dateTH = document.createElement("td");
					dateTH.setAttribute("style", "font-weight: 800;");
					dateTH.setAttribute("rowspan", "3");
					dateTH.innerHTML = dte;
					dateTH.setAttribute("id", "date-" + dte);
					tr.appendChild(dateTH);
					


					if (data[dte].hasOwnProperty("beforeLunch")) {
						var totBL =0, totAL=0, totSN=0, totTC=0, totC=0;
						
						var blTH = document.createElement("td");
						blTH.setAttribute("style", "font-weight: 800;");
						blTH.innerHTML = "Before Lunch";
						blTH.setAttribute("id", "bl" + totalDays);
						tr.appendChild(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = data[dte]["beforeLunch"]["sneezes"];
						tr.appendChild(blsnTD);
						totBL += data[dte]["beforeLunch"]["sneezes"];
						if (data[dte]["beforeLunch"]["sneezes"] > blsnMax) blsnMax = data[dte]["beforeLunch"]["sneezes"];
						blsntot += data[dte]["beforeLunch"]["sneezes"];
						totSN += data[dte]["beforeLunch"]["sneezes"];

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = data[dte]["beforeLunch"]["throatClears"];
						tr.appendChild(bltcTD);
						totBL += data[dte]["beforeLunch"]["throatClears"];
						bltctot += data[dte]["beforeLunch"]["throatClears"];
						if (data[dte]["beforeLunch"]["throatClears"] > bltcMax) bltcMax = data[dte]["beforeLunch"]["throatClears"];
						totTC += data[dte]["beforeLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["beforeLunch"]["coughs"];
						tr.appendChild(cTD);
						totBL += data[dte]["beforeLunch"]["coughs"];
						blctot += data[dte]["beforeLunch"]["coughs"];
						if (data[dte]["beforeLunch"]["coughs"] > blcMax) blcMax = data[dte]["beforeLunch"]["coughs"];
						totC += data[dte]["beforeLunch"]["coughs"];

						var totalBLTD = document.createElement("td");
						totalBLTD.innerHTML = totBL;
						if (totBL > blMax) blMax = totBL;
						tr.appendChild(totalBLTD);


						var alTR = document.createElement("tr");
						var alTH = document.createElement("td");
						alTH.setAttribute("style", "font-weight: 800;");

						alTH.setAttribute("id", "al" + totalDays);
						alTH.innerHTML = "After Lunch";
						alTR.appendChild(alTH);
						
						var alsnTD = document.createElement("td");
						alsnTD.innerHTML = data[dte]["afterLunch"]["sneezes"];
						alTR.appendChild(alsnTD);
						totAL += data[dte]["afterLunch"]["sneezes"];
						alsntot += data[dte]["afterLunch"]["sneezes"];
						if (data[dte]["afterLunch"]["sneezes"] > alsnMax) alsnMax = data[dte]["afterLunch"]["sneezes"];
						totSN += data[dte]["afterLunch"]["sneezes"];

						var altcTD = document.createElement("td");
						altcTD.innerHTML = data[dte]["afterLunch"]["throatClears"];
						alTR.appendChild(altcTD);
						totAL += data[dte]["afterLunch"]["throatClears"];
						altctot += data[dte]["afterLunch"]["throatClears"];
						if (data[dte]["afterLunch"]["throatClears"] > altcMax) altcMax = data[dte]["afterLunch"]["throatClears"];
						totTC += data[dte]["afterLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["afterLunch"]["coughs"];
						alTR.appendChild(cTD);
						totAL += data[dte]["afterLunch"]["coughs"];
						if (data[dte]["afterLunch"]["coughs"] > alcMax) alcMax = data[dte]["afterLunch"]["coughs"];
						alctot += data[dte]["afterLunch"]["coughs"];
						totC += data[dte]["afterLunch"]["coughs"];

						var totalALTD = document.createElement("td");
						totalALTD.innerHTML = totAL;
						if (totAL > alMax) alMax = totAL;
						alTR.appendChild(totalALTD);

						table.appendChild(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("td");
						totTH.setAttribute("style", "font-weight: 800;");
						totTH.setAttribute("id", "tot" + totalDays);
						totTH.innerHTML = "Daily Total";
						totTR.appendChild(totTH);


						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = totSN;
						if (totSN > dtotsnMax) dtotsnMax = totSN;
						totTR.appendChild(snTotTD);
						tottot += totSN;
						totsntot += totSN;

						var tcTotTD = document.createElement("td");
						tcTotTD.innerHTML = totTC;
						if (totTC > dtottcMax) dtottcMax = totTC;
						totTR.appendChild(tcTotTD);
						tottot += totTC;
						tottctot += totTC;

						var cTotTD = document.createElement("td");
						cTotTD.innerHTML = totC;
						if (totC > dtotcMax) dtotcMax = totC;
						totTR.appendChild(cTotTD);
						tottot += totC;
						totctot += totC;


						var totalTD = document.createElement("td");
						totalTD.innerHTML = tottot;
						if (tottot> totMax) totMax = tottot;
						totTR.appendChild(totalTD);
						
						table.appendChild(totTR);
						
					} else {
						var blTH = document.createElement("td");
						blTH.setAttribute("style", "font-weight: 800;");
						blTH.setAttribute("id", "bl" + totalDays);
						blTH.innerHTML = "Before Lunch";
						tr.appendChild(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = "0";
						tr.appendChild(blsnTD);

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = "0";
						tr.appendChild(bltcTD);

						var blcTD = document.createElement("td");
						blcTD.innerHTML = "0";
						tr.appendChild(blcTD);

						var totBLTD = document.createElement("td");
						totBLTD.innerHTML = "0";
						tr.appendChild(totBLTD);

						var alTR = document.createElement("tr");
						var alTH = document.createElement("td");
						alTH.setAttribute("style", "font-weight: 800;");
						alTH.setAttribute("id", "al" + totalDays);
						alTH.innerHTML = "After Lunch";
						alTR.appendChild(alTH);

						var alsnTD = document.createElement("td");
						alsnTD.innerHTML = "0";
						alTR.appendChild(alsnTD);

						var altcTD = document.createElement("td");
						altcTD.innerHTML = "0";
						alTR.appendChild(altcTD);

						var cTD = document.createElement("td");
						cTD.innerHTML = "0";
						alTR.appendChild(cTD);

						var totalALTD = document.createElement("td");
						totalALTD.innerHTML = "0";
						alTR.appendChild(totalALTD);
						table.appendChild(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("td");
						totTH.setAttribute("style", "font-weight: 800;");
						totTH.setAttribute("id", "tot" + totalDays);
						totTH.innerHTML = "Daily Total";
						totTR.appendChild(totTH);

						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = data[dte]["sneezes"];
						totTR.appendChild(snTotTD);
						if (data[dte]["sneezes"] > dtotsnMax) dtotsnMax = data[dte]["sneezes"];
						tottot += data[dte]["sneezes"];
						totsntot += data[dte]["sneezes"];

						var tcTD = document.createElement("td");
						tcTD.innerHTML = data[dte]["throatClears"];
						if (data[dte]["throatClears"] > dtottcMax) dtottcMax = data[dte]["throatClears"];
						totTR.appendChild(tcTD);
						tottot += data[dte]["throatClears"];
						tottctot += data[dte]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["coughs"];
						if (data[dte]["coughs"] > dtotcMax) dtotcMax = data[dte]["coughs"];
						totTR.appendChild(cTD);
						tottot += data[dte]["coughs"];
						totctot += data[dte]["coughs"];

						var totalTD = document.createElement("td");
						totalTD.innerHTML = tottot;
						if (tottot> totMax) totMax = tottot;
						totTR.appendChild(totalTD);
						table.appendChild(totTR);
					}

				}
					var blTot = 0, alTot = 0, totTot = 0;



					var totalsTR = document.createElement("tr");
					table.appendChild(totalsTR);

					var totTH = document.createElement("td");
					totTH.setAttribute("style", "font-weight: 800;");
					totTH.setAttribute("rowspan", "3");
					totTH.setAttribute("id", "ftotalTH");
					totTH.innerHTML = "Totals";
					totalsTR.appendChild(totTH);
				
					var blTH = document.createElement("td");
					blTH.setAttribute("style", "font-weight: 800;");
					blTH.setAttribute("id", "ftotalBLTH");
					blTH.innerHTML = "Before Lunch";
					totalsTR.appendChild(blTH);

					var blsntotTD = document.createElement("td");
					blsntotTD.innerHTML = blsntot;
					blTot += blsntot;
					totalsTR.appendChild(blsntotTD);

					var bltctotTD = document.createElement("td");
					bltctotTD.innerHTML = bltctot;
					blTot += bltctot;
					totalsTR.appendChild(bltctotTD);

					var blctotTD = document.createElement("td");
					blctotTD.innerHTML = blctot;
					blTot += blctot;
					totalsTR.appendChild(blctotTD);

					var bltottotTD = document.createElement("td");
					bltottotTD.innerHTML = blTot;
					totalsTR.appendChild(bltottotTD);


					var alTR = document.createElement("tr");
					var alTH = document.createElement("td");
					alTH.setAttribute("style", "font-weight: 800;");
					alTH.setAttribute("id", "ftotalALTH");
					alTH.innerHTML = "After Lunch";
					alTR.appendChild(alTH);

					var alsntotTD = document.createElement("td");
					alsntotTD.innerHTML = alsntot;
					alTot += alsntot;
					alTR.appendChild(alsntotTD);

					var altctotTD = document.createElement("td");
					altctotTD.innerHTML = altctot;
					alTot += altctot;
					alTR.appendChild(altctotTD);

					var alctotTD = document.createElement("td");
					alctotTD.innerHTML = alctot;
					alTot += alctot;
					alTR.appendChild(alctotTD);

					var altottotTD = document.createElement("td");
					altottotTD.innerHTML = alTot;
					alTR.appendChild(altottotTD);
					table.appendChild(alTR);

					var totTR = document.createElement("tr");
					var totTH = document.createElement("td");
					totTH.setAttribute("style", "font-weight: 800;");
					totTH.setAttribute("id", "ftotalTotTH");
					totTH.innerHTML = "Daily Total";
					totTR.appendChild(totTH);

					var totsntotTD = document.createElement("td");
					totsntotTD.innerHTML = totsntot;
					totTot += totsntot;
					totTR.appendChild(totsntotTD);

					var tottctotTD = document.createElement("td");
					tottctotTD.innerHTML = tottctot;
					totTot += tottctot;
					totTR.appendChild(tottctotTD);

					var totctotTD = document.createElement("td");
					totctotTD.innerHTML = totctot;
					totTot += totctot;
					totTR.appendChild(totctotTD);

					var tottottotTD = document.createElement("td");
					tottottotTD.innerHTML = totTot;
					totTR.appendChild(tottottotTD);
					table.appendChild(totTR);


					var avgTR = document.createElement("tr");
					table.appendChild(avgTR);
					
					var avgTH = document.createElement("td");
					avgTH.setAttribute("style", "font-weight: 800;");
					avgTH.innerHTML = "Averages";
					avgTH.setAttribute("id", "avgTH");
					avgTH.setAttribute("rowspan", "3");
					avgTR.appendChild(avgTH);

					var blaTH = document.createElement("td");
					blaTH.setAttribute("style", "font-weight: 800;");
					blaTH.innerHTML = "Before Lunch";
					blaTH.setAttribute("id", "blaTH");
					avgTR.appendChild(blaTH);
					
					var blsnaTD = document.createElement("td");
					blsnaTD.innerHTML = (blsntot / totalDays).toFixed(2);
					avgTR.appendChild(blsnaTD);

					var bltcaTD = document.createElement("td");
					bltcaTD.innerHTML = (bltctot / totalDays).toFixed(2);
					avgTR.appendChild(bltcaTD);

					var blcaTD = document.createElement("td");
					blcaTD.innerHTML = (blctot / totalDays).toFixed(2);
					avgTR.appendChild(blcaTD);

					var blaTD = document.createElement("td");
					blaTD.innerHTML = (blTot / totalDays).toFixed(2);
					avgTR.appendChild(blaTD);

					var alaTR = document.createElement("tr");
					var alaTH = document.createElement("td");
					alaTH.setAttribute("style", "font-weight: 800;");
					alaTH.setAttribute("id", "alaTH");
					alaTH.innerHTML = "After Lunch";
					alaTR.appendChild(alaTH);

					var alsnaTD = document.createElement("td");
					alsnaTD.innerHTML = (alsntot / totalDays).toFixed(2);
					alaTR.appendChild(alsnaTD);

					var altcaTD = document.createElement("td");
					altcaTD.innerHTML = (altctot / totalDays).toFixed(2);
					alaTR.appendChild(altcaTD);

					var alcaTD = document.createElement("td");
					alcaTD.innerHTML = (alctot / totalDays).toFixed(2);
					alaTR.appendChild(alcaTD);

					var alaTD = document.createElement("td");
					alaTD.innerHTML = (alTot / totalDays).toFixed(2);
					alaTR.appendChild(alaTD);

					table.appendChild(alaTR);

					var totaTR = document.createElement("tr");
					var totaTH = document.createElement("td");
					totaTH.setAttribute("style", "font-weight: 800;");
					totaTH.innerHTML = "Daily Total (" + totalDays + ")";
					totaTH.setAttribute("id", "totaTH");
					totaTR.appendChild(totaTH);

					
					var totsnaTD = document.createElement("td");
					totsnaTD.innerHTML = (totsntot / totalDays).toFixed(2);
					totaTR.appendChild(totsnaTD);

					var tottcaTD = document.createElement("td");
					tottcaTD.innerHTML = (tottctot / totalDays).toFixed(2);
					totaTR.appendChild(tottcaTD);

					var totcaTD = document.createElement("td");
					totcaTD.innerHTML = (totctot / totalDays).toFixed(2);
					totaTR.appendChild(totcaTD);

					var totaTD = document.createElement("td");
					totaTD.innerHTML = (totTot / totalDays).toFixed(2);
					totaTR.appendChild(totaTD);


					table.appendChild(totaTR);

					
					var maxTR = document.createElement("tr");
					table.appendChild(maxTR);
					
					var maxTH = document.createElement("td");
					maxTH.setAttribute("style", "font-weight: 800;");
					maxTH.setAttribute("id", "maxTH");
					maxTH.innerHTML = "Maximums";
					maxTH.setAttribute("rowspan", "3");
					maxTR.appendChild(maxTH);

					var blmTH = document.createElement("td");
					blmTH.setAttribute("style", "font-weight: 800;");
					blmTH.innerHTML = "Before Lunch";
					blmTH.setAttribute("id", "blMTH");
					maxTR.appendChild(blmTH);
					
					var blsnmTD = document.createElement("td");
					blsnmTD.innerHTML = blsnMax;
					maxTR.appendChild(blsnmTD);

					var bltcmTD = document.createElement("td");
					bltcmTD.innerHTML = bltcMax;
					maxTR.appendChild(bltcmTD);

					var blcmTD = document.createElement("td");
					blcmTD.innerHTML = blcMax;
					maxTR.appendChild(blcmTD);

					var blmTD = document.createElement("td");
					blmTD.innerHTML = blMax;
					maxTR.appendChild(blmTD);

					var almTR = document.createElement("tr");
					var almTH = document.createElement("td");
					almTH.setAttribute("style", "font-weight: 800;");
					almTH.setAttribute("id", "alMTH");
					almTH.innerHTML = "After Lunch";
					almTR.appendChild(almTH);

					var alsnaTD = document.createElement("td");
					alsnaTD.innerHTML = alsnMax;
					almTR.appendChild(alsnaTD);

					var altcaTD = document.createElement("td");
					altcaTD.innerHTML = altcMax;
					almTR.appendChild(altcaTD);

					var alcaTD = document.createElement("td");
					alcaTD.innerHTML = alcMax;
					almTR.appendChild(alcaTD);

					var almTD = document.createElement("td");
					almTD.innerHTML = alMax;
					almTR.appendChild(almTD);
					table.appendChild(almTR);

					var totmTR = document.createElement("tr");
					var totmTH = document.createElement("td");
					totmTH.setAttribute("style", "font-weight: 800;");
					totmTH.setAttribute("id", "maxDTTH");
					totmTH.innerHTML = "Daily Total (" + totalDays + ")";
					totmTR.appendChild(totmTH);

					
					var totsnaTD = document.createElement("td");
					totsnaTD.innerHTML = dtotsnMax;
					totmTR.appendChild(totsnaTD);

					var tottcaTD = document.createElement("td");
					tottcaTD.innerHTML = dtottcMax;
					totmTR.appendChild(tottcaTD);

					var totcaTD = document.createElement("td");
					totcaTD.innerHTML = dtotcMax;
					totmTR.appendChild(totcaTD);

					var totmTD = document.createElement("td");
					totmTD.innerHTML = totMax;
					totmTR.appendChild(totmTD);

					table.appendChild(totmTR);

		} else {
			console.error ("Did not get table.");
		}
	}
} // End of createTable

function getData () {
	let params = (new URL(document.location)).searchParams;
	if (params.get("full")) {
		if (params.get("full") == "true") full = true;
	}

	//var prefix = "/~/andrewnordlund/practice-site";
	var prefix = "..";
	if (dbug) console.log ("Getting: " + prefix + "/data/tmctf.json");

	getRemoteFile(prefix + "/data/tmctf.json", createTable);

} // End of getData

document.addEventListener("DOMContentLoaded", getData, false);
