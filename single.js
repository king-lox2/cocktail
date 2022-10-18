import showSingle from './singlePage/showSingle.js';

const singleUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

 
 const params = new URLSearchParams(window.location.search);
 
  const i = params.get('i');
 
window.addEventListener("DOMContentLoaded", () =>{
  showSingle(`${singleUrl}${i}`);
});