//window.onload = function(){

setInterval("changerPhoto()",8000);



var photos =["Galerie/Thumbnails/Allemagne.jpg","Galerie/Thumbnails/Angleterre.jpg","Galerie/Thumbnails/Autriche.jpg","Galerie/Thumbnails/coupe.jpg","Galerie/Thumbnails/Espagne.jpg","Galerie/Thumbnails/français.jpg","Galerie/Thumbnails/France.jpg","Galerie/Thumbnails/Irlande.jpg","Galerie/Thumbnails/mascotte.jpg"];
var hauteurs = ["253px","266px","230px","259px","266px","200px","224px","266px","266px"];
var image = document.getElementById("photo-aleatoire");
var i =0;

function changerPhoto(){
	i++;
	if(i===photos.length){
		i = 0;
	}
	image.setAttribute("src",photos[i]);
	image.setAttribute("height",hauteurs[i]);
	
}
