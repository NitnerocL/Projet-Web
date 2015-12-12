var dejaGenere = false;
var compteTour = 8; //Par défaut, c'est les 8ème de finale
var paysRestants = []; //Variable globale pour pouvoir l'utiliser partout !

function selectionnerPays(){
	var liste = ["Albanie", "Allemagne", "Angleterre", "Autriche", "Croatie", "Espagne", "France", "Hongrie", "Irlande", "Irlande du Nord", "Islande", "Italie", "Norvège", "Pays de Galle", "Pologne", "Portugal", "République Tchèque", "Roumanie", "Russie", "Slovaquie", "Slovénie", "Suisse", "Turquie", "Ukraine"];
	var paysSelectionnes = [];
	for(var i=0; i<16;i++){
		var temp = Math.floor(Math.random()*liste.length) ;
		paysSelectionnes[i]=liste[temp];
		liste.splice(temp,1); //On le supprime ensuite de la liste pour ne pas l'ajouter 2 fois.
	}
	return paysSelectionnes;
}

document.getElementById("generer-equipes").onclick=function(){//On ne s'en sert qu'ici, donc on utilise une fonction anonyme, elle n'a pas besoin d'avoir de nom.
	if(!dejaGenere){
		var paysSelectionnes = selectionnerPays();
		var id = ["org-8-1a", "org-8-1b", "org-8-2a", "org-8-2b", "org-8-3a", "org-8-3b", "org-8-4a", "org-8-4b", "org-8-5a", "org-8-5b", "org-8-6a", "org-8-6b", "org-8-7a", "org-8-7b", "org-8-8a", "org-8-8b"];
		for(var i=0;i<16;i++){
			document.getElementById(id[i]).innerHTML = paysSelectionnes[i];
		} 
		dejaGenere = true;
		paysRestants = paysSelectionnes;
	}else{
		window.alert("Vous ne pouvez pas regénérer le tableau !"); //Pour pas que l'on puisse tricher si la sélection ne nous plaît pas.
	}
}


function passerTourSuivant(){
	var gagnants =[] ;
	for (i=0, longueur =paysRestants.length; i<longueur;i+=2){
		if (Math.random()<0.5){
			gagnants.push(paysRestants[i]) ;
		}
		else {
			gagnants.push(paysRestants[i+1]) ;
		}
	}
	paysRestants=gagnants;
}

document.getElementById("tour-suivant").onclick=function() {
	if(paysRestants.length>1){ //Si on n'a pas déjà tout généré
		passerTourSuivant();
		var id=[];
		if(compteTour===8){ //En fonction de l'avancement de la compétition, on récupère les id des cases à remplir
			id = ["org-4-1a", "org-4-1b", "org-4-2a", "org-4-2b", "org-4-3a", "org-4-3b", "org-4-4a", "org-4-4b"];
		}else if(compteTour === 4){
			id = ["org-2-1a","org-2-1b","org-2-2a","org-2-2b"];
		}else if(compteTour===2){
			id = ["org-1a","org-1b"];
		}else if(compteTour===1){
			id=["org-winner"];
			var nomAudio = paysRestants[0];
			nomAudio.toLowerCase();
			var audio = new Audio("Sounds/"+nomAudio+".mp3");
			audio.play();
		}

		for(i=0;i<compteTour;i++){ //On écrit alors le nom des pays dans les cases
			document.getElementById(id[i]).innerHTML = paysRestants[i];
		}
		compteTour = Math.floor(compteTour / 2); //On divise le nombre des pays par 2 en prenant la valeut entière pour avoir 0 après la finale.
	}else{
		if(compteTour===8){
			window.alert("Il faut déjà générer la liste des équipes qualifiées !")
		}else{
		window.alert("Petit chenapan, le tableau est déjà rempli, open your eyes !")
		}
	}
}
