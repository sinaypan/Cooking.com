import{
  recettesDB
}from './recettesDB.js';

export const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
}
  

  const rech= getElement('.search_wrap_6');
  const btn = getElement('.rech_btn');

  btn.addEventListener('click', () => {
    if(btn.id==='itshidden'){
      rech.removeAttribute('id');
      btn.setAttribute('id', 'itsnothidden');
    }
    else{
      rech.setAttribute('id', 'hidden');
      btn.setAttribute('id', 'itshidden');
    }
  });



  function checkSubstring(string1, string2) {
    
    string1 = string1.toLowerCase().replace(/\s+/g, '');
    string2 = string2.toLowerCase().replace(/\s+/g, '');
  
    
    if (string2.includes(string1)) {
      return true; 
    } else {
      return false; 
    }
  }
  

  function exist (value){
    for(let i=0; i<recettesDB.length; i++){
      if(checkSubstring(value,recettesDB[i].name)){
        return recettesDB[i].id;
      }
    }
    return 0;
  }

  

  const recherche= getElement('.gg-search');
  const input = getElement('.input');
  var valeur;
  recherche.addEventListener('click', () => {
    valeur=exist(input.value);
    window.open('details.html?recette='+valeur , '_self');
  });

  



  const links = getElement('.nav-links');
  const navBtnDOM = getElement('.nav-btn');
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links');
  })
  

  

  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear
  
  