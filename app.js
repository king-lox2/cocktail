import showData from './src/showData.js';
import './src/search.js'; 



const cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';   


window.addEventListener("DOMContentLoaded", () => {
  showData(cocktailApi);
});


