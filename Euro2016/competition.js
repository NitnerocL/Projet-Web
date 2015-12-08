var dates = [[new Date("2016-06-11T14:00:00"),"France","Allemagne"], [new Date("2016-06-11T17:00:00"),"Autriche","Slovaquie"],[new Date("2016-06-12T16:00:00"),"Suisse","Angleterre"],[new Date("2016-06-12T20:00:00"),"Irlande","Belgique"],[new Date("2016-06-13T14:00:00"),"Italie","Albanie"],[new Date("2016-06-13T17:00:00"),"Russie","Croatie"],[new Date("2016-06-13T20:00:00"),"Turquie","Ukraine"]];
function nextMatch(){
	var date = new Date();
	for(i = 0;i<dates.length;i++){
		if (dates[i][0]>date){
			return dates[i];
		}
		else{
			return [new Date(0),"",""];
		}
	}
}

prochainMatch = nextMatch();

if (prochainMatch[0] != new Date(0)){ 
	document.getElementById("prochainMatch").innerHTML = "Le prochain match aura lieu le " + prochainMatch[0].toLocaleString() +" et opposera "+prochainMatch[1] + " et "+prochainMatch[2]+".";
}