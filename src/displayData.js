const cocktailContainer = document.querySelector('.cocktail-container');
const title = document.querySelector('.title');
const alp = document.querySelector('.alp');
const alph = document.querySelector('.alph');


const displayData = (items) => {

 const dataArray = items.map((data) =>{
 // destructiring

const {
strDrinkThumb:img,
strDrink:title,
idDrink:id
} = data;



return `
 <a  href="single.html?i=${id}" class='details '>
    <img src="${img}" alt="${title}" class="img-co" />
       <div class="co-name">${title}</div>
     </a>
`;
 }).join('');
 
alp.textContent = "click on any particular cocktail image to display its specific information ...";
alph.textContent = 'find cocktails by clicking the cocktail first letter below, alternatively you can use the search field above to search for the cocktail ...';
 title.textContent = ''; 

 cocktailContainer.innerHTML = `
  <div class="cocktail-center">
     ${dataArray}
    </div>
 `;
};


export default displayData;