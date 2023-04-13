import{
    recettesDB
  }from './recettesDB.js';

const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
}

const fragment = parseInt((window.location.hash).substring(1));
var posImg = 0;

const recipe = getElement('.recipe');



const titre =document.createElement("h3");
titre.id="titre";
titre.textContent=recettesDB[fragment-1].name;
recipe.appendChild(titre);




const divImg = document.createElement("div");
divImg.className="recipe-img-div";
recipe.appendChild(divImg);


const divGauche = document.createElement("div");
divGauche.className="gauche";
divImg.appendChild(divGauche);

const divGaucheI = document.createElement("i");
divGaucheI.className="gg-chevron-double-left";
divGauche.appendChild(divGaucheI);

const divImgI = document.createElement("img");
divImgI.className="im recipe-img";
divImgI.id="recipe-img"+fragment;
divImgI.src=".\\assets\\recettes\\"+fragment+"\\1.png";
divImg.appendChild(divImgI);

const divDroite = document.createElement("div");
divDroite.className="droite";
divImg.appendChild(divDroite);

const divDroiteI = document.createElement("i");
divDroiteI.className="gg-chevron-double-right";
divDroite.appendChild(divDroiteI);







const divDetails = document.createElement("div");
divDetails.className="details";
recipe.appendChild(divDetails);



const divInfo = document.createElement("div");
divInfo.className="info";
divDetails.appendChild(divInfo);

const divInfoH4 = document.createElement("h4");
divInfoH4.textContent="Informations Generales";
divInfo.appendChild(divInfoH4);

const divInfodiv = document.createElement("div");
divInfo.appendChild(divInfodiv);

const category = document.createElement("p");
category.innerHTML="<h5>Catégorie : </h5>  "+recettesDB[fragment-1].category;
divInfodiv.appendChild(category);

const country = document.createElement("p");
country.innerHTML="<h5>Pays : </h5>"+recettesDB[fragment-1].country;
divInfodiv.appendChild(country);

const duration = document.createElement("p");
duration.innerHTML="<h5>Durée : </h5>"+recettesDB[fragment-1].duration;
divInfodiv.appendChild(duration);


const divInfoPrincipale = document.createElement("div");
divInfoPrincipale.className="info-principale";
divDetails.appendChild(divInfoPrincipale);

const Ingredients = document.createElement("div");
Ingredients.className="ingredients";
Ingredients.id="ingredients";
divInfoPrincipale.appendChild(Ingredients);


const IngredientsH4 = document.createElement("h4");
IngredientsH4.className="name";
IngredientsH4.textContent="Ingrédients";
Ingredients.appendChild(IngredientsH4);

const IngredientsOl = document.createElement("ol");
Ingredients.appendChild(IngredientsOl);


for (let i = 0; i < recettesDB[fragment-1].ingredients.length; i++) {
  const IngredientsOlLi = document.createElement("li");/* N FOIS  */
  IngredientsOlLi.textContent=recettesDB[fragment-1].ingredients[i];
  IngredientsOl.appendChild(IngredientsOlLi);
}







const Preparations = document.createElement("div");
Preparations.className="preparations";
Preparations.id="preparation";
divInfoPrincipale.appendChild(Preparations);

const PreparationsH4 = document.createElement("h4");
PreparationsH4.className="name";
PreparationsH4.textContent="Préparations";
Preparations.appendChild(PreparationsH4);

const PreparationsOl = document.createElement("ol");
Preparations.appendChild(PreparationsOl);

for (let i = 0; i < recettesDB[fragment-1].instructions.length; i++) {
  const PreparationsOlli = document.createElement("li");/* N FOIS  */
  PreparationsOlli.textContent=recettesDB[fragment-1].instructions[i];
  PreparationsOl.appendChild(PreparationsOlli);
}





const Commentaires = document.createElement("div");
Commentaires.className="commentaires";
recipe.appendChild(Commentaires);

const CommentairesH4 = document.createElement("h4");
CommentairesH4.className="name";
CommentairesH4.textContent="Commentaires";
Commentaires.appendChild(CommentairesH4);

for (let i = 0; i < (recettesDB[fragment-1].comments).length; i++) {

const CommentairesFieldset = document.createElement("fieldset");
CommentairesFieldset.id=i+1;

const CommentairesFieldsetLegend = document.createElement("legend");
CommentairesFieldsetLegend.textContent=recettesDB[fragment-1].comments[i].rating;
CommentairesFieldset.appendChild(CommentairesFieldsetLegend);

/*---------------------------------------------------------------- */
const CommentairesFieldsetLegendimg = document.createElement("img");
CommentairesFieldsetLegendimg.src=".\\assets\\star.svg";
console.log(CommentairesFieldsetLegendimg.src);
CommentairesFieldsetLegend.appendChild(CommentairesFieldsetLegendimg);
/*---------------------------------------------------------------- */

/*---------------------------------------------------------------- */
const CommentairesFieldsetuserdiv= document.createElement("div");
CommentairesFieldsetuserdiv.className="userdiv";
CommentairesFieldset.appendChild(CommentairesFieldsetuserdiv);
/*---------------------------------------------------------------- */

const CommentairesFieldsetuser = document.createElement("p");
CommentairesFieldsetuser.className="user";
CommentairesFieldsetuser.textContent=recettesDB[fragment-1].comments[i].user;
CommentairesFieldsetuserdiv.appendChild(CommentairesFieldsetuser);


/*---------------------------------------------------------------- */
const CommentairesFieldsetcommentairediv= document.createElement("div");
CommentairesFieldsetcommentairediv.className="commentairediv";
CommentairesFieldset.appendChild(CommentairesFieldsetcommentairediv);
/*---------------------------------------------------------------- */

const CommentairesFieldsetcommentaire = document.createElement("p");
CommentairesFieldsetcommentaire.className="commentaire";
CommentairesFieldsetcommentaire.textContent=recettesDB[fragment-1].comments[i].content;
CommentairesFieldsetcommentairediv.appendChild(CommentairesFieldsetcommentaire);

Commentaires.appendChild(CommentairesFieldset);


  /*const CommentairesFieldset = document.createElement("fieldset");
  CommentairesFieldset.id=i+1;

  const CommentairesFieldsetLegend = document.createElement("legend");
  CommentairesFieldsetLegend.textContent=recettesDB[fragment-1].comments[i].user;

  const CommentairesFieldsetrating = document.createElement("p");
  CommentairesFieldsetrating.className="rating";
  CommentairesFieldsetrating.textContent=recettesDB[fragment-1].comments[i].rating;

  const CommentairesFieldsetcommentaire = document.createElement("p");
  CommentairesFieldsetcommentaire.className="commentaire";
  CommentairesFieldsetcommentaire.textContent=recettesDB[fragment-1].comments[i].comment;

  CommentairesFieldset.appendChild(CommentairesFieldsetLegend);
  CommentairesFieldset.appendChild(CommentairesFieldsetrating);
  CommentairesFieldset.appendChild(CommentairesFieldsetcommentaire);
  
  Commentaires.appendChild(CommentairesFieldset); */
}














const gauche = getElement('.gauche');
const droite = getElement('.droite');
 

gauche.addEventListener('click', () => {
  posImg--;
  let j = ((posImg % 4 + 4) % 4)+1;
  var img = getElement('.recipe-img');
  img.src=".\\assets\\recettes\\"+fragment+"\\"+j+".png";
  console.log(img);
  
})

droite.addEventListener('click', () => {
  posImg++;
  let j = ((posImg % 4 + 4) % 4)+1;
  var img = getElement('.recipe-img');
  img.src=".\\assets\\recettes\\"+fragment+"\\"+j+".png";
  console.log(img);

  
})

