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
	
				var blsntot = 0, alsntot = 0, totsntot=0;
				var bltctot = 0, altctot = 0, tottctot=0;
				var blctot = 0, alctot = 0, totctot=0;
				var blsnMax = 0, alsnMax = 0, dtotsnMax = 0;
				var bltcMax = 0, altcMax = 0, dtottcMax = 0;
				var blcMax = 0, alcMax = 0, dtotcMax = 0;
				var blMax = 0, alMax = 0, totMax = 0;
				var totalDays = 0;

				for (var dte in data) {
					totalDays++;
					var total = 0, tottot =0;
					var tr = document.createElement("tr");
					tbody.appendChild(tr);
					var dateTH = document.createElement("th");
					dateTH.setAttribute("rowspan", "3");
					dateTH.innerHTML = dte; //.replace(/-/, "<br>");
					dateTH.setAttribute("id", "date-" + dte);
					dateTH.setAttribute("headers", "date");
					tr.appendChild(dateTH);
					


					if (data[dte].hasOwnProperty("beforeLunch")) {
						var totBL =0, totAL=0, totSN=0, totTC=0, totC=0;
						
						var blTH = document.createElement("th");
						blTH.innerHTML = "Before Lunch";
						blTH.setAttribute("id", "bl" + totalDays);
						blTH.setAttribute("headers", "period date-" + dte);
						tr.appendChild(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.innerHTML = data[dte]["beforeLunch"]["sneezes"];
						blsnTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " sneeze");
						tr.appendChild(blsnTD);
						totBL += data[dte]["beforeLunch"]["sneezes"];
						if (data[dte]["beforeLunch"]["sneezes"] > blsnMax) blsnMax = data[dte]["beforeLunch"]["sneezes"];
						blsntot += data[dte]["beforeLunch"]["sneezes"];
						totSN += data[dte]["beforeLunch"]["sneezes"];

						var bltcTD = document.createElement("td");
						bltcTD.innerHTML = data[dte]["beforeLunch"]["throatClears"];
						bltcTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " throatClears");
						tr.appendChild(bltcTD);
						totBL += data[dte]["beforeLunch"]["throatClears"];
						bltctot += data[dte]["beforeLunch"]["throatClears"];
						if (data[dte]["beforeLunch"]["throatClears"] > bltcMax) bltcMax = data[dte]["beforeLunch"]["throatClears"];
						totTC += data[dte]["beforeLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["beforeLunch"]["coughs"];
						cTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " coughs");
						tr.appendChild(cTD);
						totBL += data[dte]["beforeLunch"]["coughs"];
						blctot += data[dte]["beforeLunch"]["coughs"];
						if (data[dte]["beforeLunch"]["coughs"] > blcMax) blcMax = data[dte]["beforeLunch"]["coughs"];
						totC += data[dte]["beforeLunch"]["coughs"];

						var totalBLTD = document.createElement("td");
						totalBLTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " totalNoises");
						totalBLTD.innerHTML = totBL;
						if (totBL > blMax) blMax = totBL;
						tr.appendChild(totalBLTD);


						var alTR = document.createElement("tr");
						var alTH = document.createElement("th");

						alTH.setAttribute("headers", "period date-" + dte);
						alTH.setAttribute("id", "al" + totalDays);
						alTH.innerHTML = "After Lunch";
						alTR.appendChild(alTH);
						
						var alsnTD = document.createElement("td");
						alsnTD.innerHTML = data[dte]["afterLunch"]["sneezes"];
						alsnTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " sneeze");
						alTR.appendChild(alsnTD);
						totAL += data[dte]["afterLunch"]["sneezes"];
						alsntot += data[dte]["afterLunch"]["sneezes"];
						if (data[dte]["afterLunch"]["sneezes"] > alsnMax) alsnMax = data[dte]["afterLunch"]["sneezes"];
						totSN += data[dte]["afterLunch"]["sneezes"];

						var altcTD = document.createElement("td");
						altcTD.innerHTML = data[dte]["afterLunch"]["throatClears"];
						altcTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " throatClears");
						alTR.appendChild(altcTD);
						totAL += data[dte]["afterLunch"]["throatClears"];
						altctot += data[dte]["afterLunch"]["throatClears"];
						if (data[dte]["afterLunch"]["throatClears"] > altcMax) altcMax = data[dte]["afterLunch"]["throatClears"];
						totTC += data[dte]["afterLunch"]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["afterLunch"]["coughs"];
						cTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " coughs");
						alTR.appendChild(cTD);
						totAL += data[dte]["afterLunch"]["coughs"];
						if (data[dte]["afterLunch"]["coughs"] > alcMax) alcMax = data[dte]["afterLunch"]["coughs"];
						alctot += data[dte]["afterLunch"]["coughs"];
						totC += data[dte]["afterLunch"]["coughs"];

						var totalALTD = document.createElement("td");
						totalALTD.innerHTML = totAL;
						totalALTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " totalNoises");
						if (totAL > alMax) alMax = totAL;
						alTR.appendChild(totalALTD);

						tbody.appendChild(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("th");
						totTH.setAttribute("id", "tot" + totalDays);
						totTH.setAttribute("headers", "period date-" + dte);
						totTH.innerHTML = "Daily Total";
						totTR.appendChild(totTH);


						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = totSN;
						snTotTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " sneeze");
						if (totSN > dtotsnMax) dtotsnMax = totSN;
						totTR.appendChild(snTotTD);
						tottot += totSN;
						totsntot += totSN;

						var tcTotTD = document.createElement("td");
						tcTotTD.innerHTML = totTC;
						tcTotTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " throatClears");
						if (totTC > dtottcMax) dtottcMax = totTC;
						totTR.appendChild(tcTotTD);
						tottot += totTC;
						tottctot += totTC;

						var cTotTD = document.createElement("td");
						cTotTD.innerHTML = totC;
						cTotTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " coughs");
						if (totC > dtotcMax) dtotcMax = totC;
						totTR.appendChild(cTotTD);
						tottot += totC;
						totctot += totC;


						var totalTD = document.createElement("td");
						totalTD.innerHTML = tottot;
						totalTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " totalNoises");
						if (tottot> totMax) totMax = tottot;
						totTR.appendChild(totalTD);
						
						tbody.appendChild(totTR);
						
					} else {
						var blTH = document.createElement("th");
						blTH.setAttribute("headers", "period date-" + dte);
						blTH.setAttribute("id", "bl" + totalDays);
						blTH.innerHTML = "Before Lunch";
						tr.appendChild(blTH);
						
						var blsnTD = document.createElement("td");
						blsnTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " sneeze");
						blsnTD.innerHTML = "0";
						tr.appendChild(blsnTD);

						var bltcTD = document.createElement("td");
						bltcTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " throatClears");
						bltcTD.innerHTML = "0";
						tr.appendChild(bltcTD);

						var blcTD = document.createElement("td");
						blcTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " coughs");
						blcTD.innerHTML = "0";
						tr.appendChild(blcTD);

						var totBLTD = document.createElement("td");
						totBLTD.setAttribute("headers", "date-" + dte + " bl" + totalDays + " totalNoises");
						totBLTD.innerHTML = "0";
						tr.appendChild(totBLTD);

						var alTR = document.createElement("tr");
						var alTH = document.createElement("th");
						alTH.setAttribute("headers", "period date-" + dte);
						alTH.setAttribute("id", "al" + totalDays);
						alTH.innerHTML = "After Lunch";
						alTR.appendChild(alTH);

						var alsnTD = document.createElement("td");
						alsnTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " sneeze");
						alsnTD.innerHTML = "0";
						alTR.appendChild(alsnTD);

						var altcTD = document.createElement("td");
						altcTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " throatClears");
						altcTD.innerHTML = "0";
						alTR.appendChild(altcTD);

						var cTD = document.createElement("td");
						cTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " coughs");
						cTD.innerHTML = "0";
						alTR.appendChild(cTD);

						var totalALTD = document.createElement("td");
						totalALTD.setAttribute("headers", "date-" + dte + " al" + totalDays + " totalNoises");
						totalALTD.innerHTML = "0";
						alTR.appendChild(totalALTD);
						tbody.appendChild(alTR);

						var totTR = document.createElement("tr");
						var totTH = document.createElement("th");
						totTH.setAttribute("headers", "period date-" + dte);
						totTH.setAttribute("id", "tot" + totalDays);
						totTH.innerHTML = "Daily Total";
						totTR.appendChild(totTH);

						var snTotTD = document.createElement("td");
						snTotTD.innerHTML = data[dte]["sneezes"];
						snTotTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " sneeze");
						totTR.appendChild(snTotTD);
						if (data[dte]["sneezes"] > dtotsnMax) dtotsnMax = data[dte]["sneezes"];
						tottot += data[dte]["sneezes"];
						totsntot += data[dte]["sneezes"];

						var tcTD = document.createElement("td");
						tcTD.innerHTML = data[dte]["throatClears"];
						tcTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " throatClears");
						if (data[dte]["throatClears"] > dtottcMax) dtottcMax = data[dte]["throatClears"];
						totTR.appendChild(tcTD);
						tottot += data[dte]["throatClears"];
						tottctot += data[dte]["throatClears"];

						var cTD = document.createElement("td");
						cTD.innerHTML = data[dte]["coughs"];
						cTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " coughs");
						if (data[dte]["coughs"] > dtotcMax) dtotcMax = data[dte]["coughs"];
						totTR.appendChild(cTD);
						tottot += data[dte]["coughs"];
						totctot += data[dte]["coughs"];

						var totalTD = document.createElement("td");
						totalTD.setAttribute("headers", "date-" + dte + " tot" + totalDays + " totalNoises");
						totalTD.innerHTML = tottot;
						if (tottot> totMax) totMax = tottot;
						totTR.appendChild(totalTD);
						tbody.appendChild(totTR);
					}

				}
				var tfoot = null;
				tfoot = table.getElementsByTagName("tfoot");
				if (tfoot) {
					var blTot = 0, alTot = 0, totTot = 0;



					tfoot = tfoot[0];
					var totalsTR = document.createElement("tr");
					tfoot.appendChild(totalsTR);

					var totTH = document.createElement("th");
					totTH.setAttribute("rowspan", "3");
					totTH.setAttribute("id", "ftotalTH");
					totTH.innerHTML = "Totals";
					totalsTR.appendChild(totTH);
				
					var blTH = document.createElement("th");
					blTH.setAttribute("headers", "period ftotalTH");
					blTH.setAttribute("id", "ftotalBLTH");
					blTH.innerHTML = "Before Lunch";
					totalsTR.appendChild(blTH);

					var blsntotTD = document.createElement("td");
					blsntotTD.setAttribute("headers", "ftotalTH ftotalBLTH sneeze");
					blsntotTD.innerHTML = blsntot;
					blTot += blsntot;
					totalsTR.appendChild(blsntotTD);

					var bltctotTD = document.createElement("td");
					bltctotTD.setAttribute("headers", "ftotalTH ftotalBLTH throatClears");
					bltctotTD.innerHTML = bltctot;
					blTot += bltctot;
					totalsTR.appendChild(bltctotTD);

					var blctotTD = document.createElement("td");
					blctotTD.setAttribute("headers", "ftotalTH ftotalBLTH coughs");
					blctotTD.innerHTML = blctot;
					blTot += blctot;
					totalsTR.appendChild(blctotTD);

					var bltottotTD = document.createElement("td");
					bltottotTD.setAttribute("headers", "ftotalTH ftotalBLTH totalNoises");
					bltottotTD.innerHTML = blTot;
					totalsTR.appendChild(bltottotTD);


					var alTR = document.createElement("tr");
					var alTH = document.createElement("th");
					alTH.setAttribute("headers", "period ftotalTH");
					alTH.setAttribute("id", "ftotalALTH");
					alTH.innerHTML = "After Lunch";
					alTR.appendChild(alTH);

					var alsntotTD = document.createElement("td");
					alsntotTD.setAttribute("headers", "ftotalTH ftotalALTH sneeze");
					alsntotTD.innerHTML = alsntot;
					alTot += alsntot;
					alTR.appendChild(alsntotTD);

					var altctotTD = document.createElement("td");
					altctotTD.setAttribute("headers", "ftotalTH ftotalALTH throatClears");
					altctotTD.innerHTML = altctot;
					alTot += altctot;
					alTR.appendChild(altctotTD);

					var alctotTD = document.createElement("td");
					alctotTD.setAttribute("headers", "ftotalTH ftotalALTH coughs");
					alctotTD.innerHTML = alctot;
					alTot += alctot;
					alTR.appendChild(alctotTD);

					var altottotTD = document.createElement("td");
					altottotTD.setAttribute("headers", "ftotalTH ftotalALTH totalNoises");
					altottotTD.innerHTML = alTot;
					alTR.appendChild(altottotTD);
					tfoot.appendChild(alTR);

					var totTR = document.createElement("tr");
					var totTH = document.createElement("th");
					totTH.setAttribute("headers", "period ftotalTH");
					totTH.setAttribute("id", "ftotalTotTH");
					totTH.innerHTML = "Daily Total";
					totTR.appendChild(totTH);

					var totsntotTD = document.createElement("td");
					totsntotTD.setAttribute("headers", "ftotalTH ftotalTotTH sneeze");
					totsntotTD.innerHTML = totsntot;
					totTot += totsntot;
					totTR.appendChild(totsntotTD);

					var tottctotTD = document.createElement("td");
					tottctotTD.setAttribute("headers", "ftotalTH ftotalTotTH throatClears");
					tottctotTD.innerHTML = tottctot;
					totTot += tottctot;
					totTR.appendChild(tottctotTD);

					var totctotTD = document.createElement("td");
					totctotTD.setAttribute("headers", "ftotalTH ftotalTotTH coughs");
					totctotTD.innerHTML = totctot;
					totTot += totctot;
					totTR.appendChild(totctotTD);

					var tottottotTD = document.createElement("td");
					totsntotTD.setAttribute("headers", "ftotalTH ftotalTotTH totalNoises");
					tottottotTD.innerHTML = totTot;
					totTR.appendChild(tottottotTD);
					tfoot.appendChild(totTR);


					var avgTR = document.createElement("tr");
					tfoot.appendChild(avgTR);
					
					var avgTH = document.createElement("th");
					avgTH.innerHTML = "Averages";
					avgTH.setAttribute("id", "avgTH");
					avgTH.setAttribute("rowspan", "3");
					avgTR.appendChild(avgTH);

					var blaTH = document.createElement("th");
					blaTH.innerHTML = "Before Lunch";
					blaTH.setAttribute("id", "blaTH");
					blaTH.setAttribute("headers", "avgTH period");
					avgTR.appendChild(blaTH);
					
					var blsnaTD = document.createElement("td");
					blsnaTD.innerHTML = (blsntot / totalDays).toFixed(2);
					blsnaTD.setAttribute("headers", "avgTH blaTH sneeze");
					avgTR.appendChild(blsnaTD);

					var bltcaTD = document.createElement("td");
					bltcaTD.innerHTML = (bltctot / totalDays).toFixed(2);
					bltcaTD.setAttribute("headers", "avgTH blaTH throatClears");
					avgTR.appendChild(bltcaTD);

					var blcaTD = document.createElement("td");
					blcaTD.innerHTML = (blctot / totalDays).toFixed(2);
					blcaTD.setAttribute("headers", "avgTH blaTH coughs");
					avgTR.appendChild(blcaTD);

					var blaTD = document.createElement("td");
					blaTD.innerHTML = (blTot / totalDays).toFixed(2);
					blaTD.setAttribute("headers", "avgTH blaTH totalNoises");
					avgTR.appendChild(blaTD);

					var alaTR = document.createElement("tr");
					var alaTH = document.createElement("th");
					alaTH.setAttribute("headers", "avgTH period");
					alaTH.setAttribute("id", "alaTH");
					alaTH.innerHTML = "After Lunch";
					alaTR.appendChild(alaTH);

					var alsnaTD = document.createElement("td");
					alsnaTD.innerHTML = (alsntot / totalDays).toFixed(2);
					alsnaTD.setAttribute("headers", "avgTH alaTH sneeze");
					alaTR.appendChild(alsnaTD);

					var altcaTD = document.createElement("td");
					altcaTD.innerHTML = (altctot / totalDays).toFixed(2);
					altcaTD.setAttribute("headers", "avgTH alaTH throatClears");
					alaTR.appendChild(altcaTD);

					var alcaTD = document.createElement("td");
					alcaTD.innerHTML = (alctot / totalDays).toFixed(2);
					alcaTD.setAttribute("headers", "avgTH alaTH coughs");
					alaTR.appendChild(alcaTD);

					var alaTD = document.createElement("td");
					alaTD.innerHTML = (alTot / totalDays).toFixed(2);
					alaTD.setAttribute("headers", "avgTH alaTH totalNoises");
					alaTR.appendChild(alaTD);

					tfoot.appendChild(alaTR);

					var totaTR = document.createElement("tr");
					var totaTH = document.createElement("th");
					totaTH.innerHTML = "Daily Total (" + totalDays + ")";
					totaTH.setAttribute("headers", "avgTH period");
					totaTH.setAttribute("id", "totaTH");
					totaTR.appendChild(totaTH);

					
					var totsnaTD = document.createElement("td");
					totsnaTD.innerHTML = (totsntot / totalDays).toFixed(2);
					totsnaTD.setAttribute("headers", "avgTH totaTH sneeze");
					totaTR.appendChild(totsnaTD);

					var tottcaTD = document.createElement("td");
					tottcaTD.innerHTML = (tottctot / totalDays).toFixed(2);
					tottcaTD.setAttribute("headers", "avgTH totaTH throatClears");
					totaTR.appendChild(tottcaTD);

					var totcaTD = document.createElement("td");
					totcaTD.innerHTML = (totctot / totalDays).toFixed(2);
					totcaTD.setAttribute("headers", "avgTH totaTH coughs");
					totaTR.appendChild(totcaTD);

					var totaTD = document.createElement("td");
					totaTD.innerHTML = (totTot / totalDays).toFixed(2);
					totaTD.setAttribute("headers", "avgTH totaTH totalNoises");
					totaTR.appendChild(totaTD);


					tfoot.appendChild(totaTR);

					
					var maxTR = document.createElement("tr");
					tfoot.appendChild(maxTR);
					
					var maxTH = document.createElement("th");
					maxTH.setAttribute("id", "maxTH");
					maxTH.innerHTML = "Maximums";
					maxTH.setAttribute("rowspan", "3");
					maxTR.appendChild(maxTH);

					var blmTH = document.createElement("th");
					blmTH.innerHTML = "Before Lunch";
					blmTH.setAttribute("id", "blMTH");
					blmTH.setAttribute("headers", "period");
					maxTR.appendChild(blmTH);
					
					var blsnmTD = document.createElement("td");
					blsnmTD.setAttribute("headers", "maxTH blMTH sneeze");
					blsnmTD.innerHTML = blsnMax;
					maxTR.appendChild(blsnmTD);

					var bltcmTD = document.createElement("td");
					bltcmTD.setAttribute("headers", "maxTH blMTH throatClears");
					bltcmTD.innerHTML = bltcMax;
					maxTR.appendChild(bltcmTD);

					var blcmTD = document.createElement("td");
					blcmTD.setAttribute("headers", "maxTH blMTH coughs");
					blcmTD.innerHTML = blcMax;
					maxTR.appendChild(blcmTD);

					var blmTD = document.createElement("td");
					blmTD.setAttribute("headers", "maxTH blMTH totalNoises");
					blmTD.innerHTML = blMax;
					maxTR.appendChild(blmTD);

					var almTR = document.createElement("tr");
					var almTH = document.createElement("th");
					almTH.setAttribute("id", "alMTH");
					almTH.setAttribute("headers", "period");
					almTH.innerHTML = "After Lunch";
					almTR.appendChild(almTH);

					var alsnaTD = document.createElement("td");
					alsnaTD.setAttribute("headers", "maxTH alMTH sneeze");
					alsnaTD.innerHTML = alsnMax;
					almTR.appendChild(alsnaTD);

					var altcaTD = document.createElement("td");
					altcaTD.setAttribute("headers", "maxTH alMTH throatClears");
					altcaTD.innerHTML = altcMax;
					almTR.appendChild(altcaTD);

					var alcaTD = document.createElement("td");
					alcaTD.setAttribute("headers", "maxTH alMTH coughs");
					alcaTD.innerHTML = alcMax;
					almTR.appendChild(alcaTD);

					var almTD = document.createElement("td");
					almTD.innerHTML = alMax;
					almTD.setAttribute("headers", "maxTH alMTH totalNoises");
					almTR.appendChild(almTD);
					tfoot.appendChild(almTR);

					var totmTR = document.createElement("tr");
					var totmTH = document.createElement("th");
					totmTH.setAttribute("id", "maxDTTH");
					totmTH.setAttribute("headers", "period");
					totmTH.innerHTML = "Daily Total (" + totalDays + ")";
					totmTR.appendChild(totmTH);

					
					var totsnaTD = document.createElement("td");
					totsnaTD.setAttribute("headers", "maxTH maxDTTH sneeze");
					totsnaTD.innerHTML = dtotsnMax;
					totmTR.appendChild(totsnaTD);

					var tottcaTD = document.createElement("td");
					tottcaTD.setAttribute("headers", "maxTH maxDTTH throatClears");
					tottcaTD.innerHTML = dtottcMax;
					totmTR.appendChild(tottcaTD);

					var totcaTD = document.createElement("td");
					totcaTD.setAttribute("headers", "maxTH maxDTTH coughs");
					totcaTD.innerHTML = dtotcMax;
					totmTR.appendChild(totcaTD);

					var totmTD = document.createElement("td");
					totmTD.setAttribute("headers", "maxTH maxDTTH totalNoises");
					totmTD.innerHTML = totMax;
					totmTR.appendChild(totmTD);

					tfoot.appendChild(totmTR);
				}
			} else {
				console.error ("Didn't get tbody");
			}

		} else {
			console.error ("Did not get table.");
		}
	}
} // End of createTable

function getData () {
	//var prefix = "/~/andrewnordlund/practice-site";
	var prefix = "..";
	console.log ("Getting: " + prefix + "/data/tmctf.json");

	getRemoteFile(prefix + "/data/tmctf.json", createTable);

} // End of getData

document.addEventListener("DOMContentLoaded", getData, false);
