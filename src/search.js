import showData from './showData.js';

const cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'; 

const formApi = 'https:www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = document.querySelector('.form-search');

const search = document.querySelector('.drink');


form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const inputValue = search.value;
  
 if (!inputValue) {
  showData(cocktailApi);
  return;
 }
 showData(`${formApi}${inputValue}`);
});
