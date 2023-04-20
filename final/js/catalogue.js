import{
    recettesDB
}from './recettesDB.js';
import{
  getElement
}from './nav_footer.js';

const params = new URLSearchParams(window.location.search);
const  fragment= params.get('categorie');




  var link, img, h5, p,imgh5,spanh5;

  const myDiv = document.querySelector('.recipes-list');

   function moyenneNote(i){
    var k=0;
    for(let j = 0; j < (recettesDB[i].comments).length; j++){
      k += recettesDB[i].comments[j].rating;

    }
    return k/(recettesDB[i].comments).length;
  }
  
  const selector=getElement('.selector-box');

  

  

  function update() {
    for (let index = 0; index < recettesDB.length; index++) {
      if(selector.value == recettesDB[index].category.replace(/\s/g, "")){
        document.querySelector('.recette'+(index+1)).style.display = 'block';
        
      }
      else if(selector.value == 'tout'){
        document.querySelector('.recette'+(index+1)).style.display = 'block';
      }
      else{
        document.querySelector('.recette'+(index+1)).style.display = 'none';
      }
    }

  }

  

  selector.addEventListener('change',update);

  for (let i = 0; i < recettesDB.length; i++) {

    
    link = document.createElement('a');
    link.href = 'details.html?recette='+(i+1);
    link.classList.add('recipe', 'recette'+(i+1));


    img = document.createElement('img');
    img.src = '../assets/recettes/'+(i+1)+'/2.png';
    img.classList.add('img', 'recipe-img');
    img.id = 'recipe-img'+(i+1);
    img.alt = 'RECETTE '+(i+1);
    link.appendChild(img);


    h5 = document.createElement('h5');
    h5.classList.add('name');
    h5.id = 'recipe-title'+(i+1);
    h5.textContent = recettesDB[i].name;
    h5.innerHTML='<span >'+ h5.textContent+'</span>';

    imgh5=document.createElement('img');
    h5.appendChild(imgh5);
    imgh5.src = '../assets/star.svg';

    spanh5=document.createElement('span');
    h5.appendChild(spanh5);
    spanh5.textContent = moyenneNote(i);
    spanh5.classList.add('jaune');
    link.appendChild(h5);


    p = document.createElement('p');
    p.id = 'recipe-p'+(i+1);
    p.textContent = "catégorie : "+ recettesDB[i].category+" | durée : "+ recettesDB[i].duration;
    link.appendChild(p);

    link.setAttribute('id',recettesDB[i].id);

    myDiv.appendChild(link);
    

  }
  

  window.onload = function() {
    if(fragment===null){
      selector.value = 'tout';
      update();
    }else{
      selector.value = fragment;
      update();
    }
    update();
  }

 
  


