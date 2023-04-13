import{
  recettesDB
}from './recettesDB.js';


var random1 = Math.floor(Math.random() * recettesDB.length);
var random2 = Math.floor(Math.random() * recettesDB.length);
var random3 = Math.floor(Math.random() * recettesDB.length);

while (random2 === random1 || recettesDB[random2].category === recettesDB[random1].category) {
  random2 = Math.floor(Math.random() * recettesDB.length);
}
while (random3 === random1 || random3 === random2 || recettesDB[random2].category === recettesDB[random3].category || recettesDB[random3].category === recettesDB[random1].category || recettesDB[random3].category === recettesDB[random2].category) {
  random3 = Math.floor(Math.random() * recettesDB.length);
}


var random4 = Math.floor(Math.random() * 4)+1;


const cover1= document.getElementById("categorie1");
cover1.textContent = recettesDB[random1].category;
const cover2= document.getElementById("categorie2");
cover2.textContent = recettesDB[random2].category;
const cover3= document.getElementById("categorie3");
cover3.textContent = recettesDB[random3].category;


var link1= document.getElementsByClassName("recette1");
link1[0].href = 'details.html?recette='+(random1+1);

var image1 = document.getElementById("recipe-img1");
image1.src = 'assets/recettes/'+(random1+1)+'/'+random4+'.png';

var titre1 = document.getElementById("recipe-title1");
titre1.textContent = recettesDB[random1].name;

var paragraphe1 = document.getElementById("recipe-p1");
paragraphe1.textContent = "catégorie : "+ recettesDB[random1].category+" | durée : "+ recettesDB[random1].duration;


var link2= document.getElementsByClassName("recette2");
link2[0].href = 'details.html?recette='+(random2+1);

var image2 = document.getElementById("recipe-img2");
image2.src =  'assets/recettes/'+(random2+1)+'/'+random4+'.png';

var titre2 = document.getElementById("recipe-title2");
titre2.textContent = recettesDB[random2].name;

var paragraphe2 = document.getElementById("recipe-p2");
paragraphe2.textContent = "catégorie : "+ recettesDB[random2].category+" | durée : "+ recettesDB[random2].duration;


var link3= document.getElementsByClassName("recette3");
link3[0].href = 'details.html?recette='+(random3+1);

var image3 = document.getElementById("recipe-img3");
image3.src =  'assets/recettes/'+(random3+1)+'/'+random4+'.png';

var titre3 = document.getElementById("recipe-title3");
titre3.textContent = recettesDB[random3].name;

var paragraphe3 = document.getElementById("recipe-p3");
paragraphe3.textContent = "catégorie : "+ recettesDB[random3].category+" | durée : "+ recettesDB[random3].duration;



// Get all elements with the class "cover"
var coverElements = document.getElementsByClassName("cover");

// Loop through each cover element
for (var i = 0; i < coverElements.length; i++) {
  // Add a mouseover event listener to each cover element
  coverElements[i].addEventListener("mouseover", function() {
    // Add the "hidden" id attribute to the hovered element
    this.id = "hidden";
  });

  // Add a mouseout event listener to each cover element
  coverElements[i].addEventListener("mouseout", function() {
    // Remove the "hidden" id attribute from the element when the mouse is moved away
    this.removeAttribute("id");
  });
}

