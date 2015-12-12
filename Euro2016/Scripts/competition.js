//Afficher en temps réel le prochain match.

var dates = [[new Date("2016-06-11T13:00:00"),"France","Allemagne"], [new Date("2016-06-11T16:00:00"),"Autriche","Slovaquie"],[new Date("2016-06-12T15:00:00"),"Suisse","Angleterre"],[new Date("2016-06-12T19:00:00"),"Irlande","Belgique"],[new Date("2016-06-13T13:00:00"),"Italie","Albanie"],[new Date("2016-06-13T16:00:00"),"Russie","Croatie"],[new Date("2016-06-13T19:00:00"),"Turquie","Ukraine"]];
//Les horaires rentrés ici correspondant à GMT, ils sont 2h plus tôt que les vrais horaires des matchs qui ont lieu en été donc à GMT+2

function nextMatch(){ //Détermine le prochain match en fonction de la date actuelle
	var date = new Date();
	for(i = 0;i<dates.length;i++){
		if (dates[i][0]>date){
			return dates[i];
		}
		else{
			return [new Date(0),"",""]; //Si tous les matchs sont déjà finis
		}
	}
}

prochainMatch = nextMatch();

if (prochainMatch[0] != new Date(0)){  //On n'affiche que s'il reste des matchs (si la compétition n'est pas terminée)
	document.getElementById("prochainMatch").innerHTML = "Le prochain match aura lieu le " + prochainMatch[0].toLocaleString() +" et opposera "+prochainMatch[1] + " et "+prochainMatch[2]+".";
}