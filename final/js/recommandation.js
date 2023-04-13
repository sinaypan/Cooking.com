import{
    recettesDB
  }from './recettesDB.js';

import{
  getElement
}from './nav_footer.js';



const fragment = Math.floor(Math.random() * recettesDB.length);;
var posImg = 0;

const recipe = getElement('.Recommandation');


function moyenneNote(i){
  var k=0;
  for(let j = 0; j < (recettesDB[i].comments).length; j++){
    k += recettesDB[i].comments[j].rating;
  }
  return k/(recettesDB[i].comments).length;
}


const RecommandationImgDiv= document.createElement('div');
recipe.appendChild(RecommandationImgDiv);

RecommandationImgDiv.classList.add('RecommandationImgDiv');

const RecommandationImg= document.createElement('img');
RecommandationImgDiv.appendChild(RecommandationImg);

RecommandationImg.src = '.\\assets\\recettes\\'+(fragment+1)+'\\'+((fragment%4)+1)+'.png';
RecommandationImg.classList.add('recipe-img');
RecommandationImg.id = 'recipe-img'+(fragment+1);



const RecommandationInfDiv= document.createElement('div');
recipe.appendChild(RecommandationInfDiv);

RecommandationInfDiv.classList.add('RecommandationInfDiv');

const RecommandationTitre= document.createElement('h4');
RecommandationInfDiv.appendChild(RecommandationTitre);

RecommandationTitre.textContent= recettesDB[fragment].name;
RecommandationTitre.classList.add('RecommandationTitre');

const RecommandationCath5= document.createElement('h5');
RecommandationInfDiv.appendChild(RecommandationCath5);
RecommandationCath5.textContent= 'Catégorie :';
const RecommandationCatdiv= document.createElement('div');
RecommandationInfDiv.appendChild(RecommandationCatdiv);
RecommandationCatdiv.textContent= recettesDB[fragment].category;
const Recommandationpayh5= document.createElement('h5');
RecommandationInfDiv.appendChild(Recommandationpayh5);
Recommandationpayh5.textContent= 'Pays :';
const Recommandationpaydiv= document.createElement('div');
RecommandationInfDiv.appendChild(Recommandationpaydiv);
Recommandationpaydiv.textContent= recettesDB[fragment].country;
const RecommandationDurh5= document.createElement('h5');
RecommandationInfDiv.appendChild(RecommandationDurh5);
RecommandationDurh5.textContent= 'Durée :';
const RecommandationDurdiv= document.createElement('div');
RecommandationInfDiv.appendChild(RecommandationDurdiv);
RecommandationDurdiv.textContent= recettesDB[fragment].duration;





const RecommandationNotspan= document.createElement('span');
RecommandationTitre.appendChild(RecommandationNotspan);
RecommandationNotspan.textContent= moyenneNote(fragment);

const RecommandationNotimg= document.createElement('img');
RecommandationTitre.appendChild(RecommandationNotimg);
RecommandationNotimg.src= '\\assets\\star.svg';




const RecommandationIngDiv= document.createElement('div');
recipe.appendChild(RecommandationIngDiv);

RecommandationIngDiv.classList.add('RecommandationIngDiv');
for (let index = 0; index < recettesDB[fragment].ingredients.length; index++) {
  const ingredient= document.createElement('p');
  RecommandationIngDiv.appendChild(ingredient);
  ingredient.textContent= recettesDB[fragment].ingredients[index];
  
}

const RecommandationEtaDiv= document.createElement('div');
recipe.appendChild(RecommandationEtaDiv);

RecommandationEtaDiv.textContent= recettesDB[fragment].instructions;
RecommandationEtaDiv.classList.add('RecommandationEtaDiv');
