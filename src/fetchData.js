const cocktailContainer = document.querySelector('.cocktail-container');
const title = document.querySelector('.title');

const alp= document.querySelector('.alp');

const fetchData = async(url) => {
  //loading spinner
title.textContent = '';
alp.textContent = '';
cocktailContainer.innerHTML = `
<main class="loader">
    <div class="load"></div>
  </main> 
`;
  try {
 const response = await fetch(url);
 const data = await response.json();
 
  return data;
  } 
  catch (error) {
    cocktailContainer.innerHTML = `
<p> Ooops 😤... <br/> Error encountered check your data connection and make sure you entered the correct url link<br/> 
        Refresh your page 
</p>
`;
  }
};

export default fetchData; 