//window.onload = function(){

setInterval("changerPhoto()",8000);



var photos =["Images/Galerie/Thumbnails/Allemagne.jpg","Images/Galerie/Thumbnails/Angleterre.jpg","Images/Galerie/Thumbnails/Autriche.jpg","Images/Galerie/Thumbnails/coupe.jpg","Images/Galerie/Thumbnails/Espagne.jpg","Images/Galerie/Thumbnails/français.jpg","Images/Galerie/Thumbnails/France.jpg","Images/Galerie/Thumbnails/Irlande.jpg","Images/Galerie/Thumbnails/mascotte.jpg"];
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
