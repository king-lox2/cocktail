import fetchData from './fetchData.js';
import displayData from './displayData.js';
import paginateData from './paginateData.js';
import displayBtn from './displayBtn.js';

const title = document.querySelector('.title');

const cocktailContainer = document.querySelector('.cocktail-container');

const alp= document.querySelector('.alp');
const alph = document.querySelector('.alph');

let index = 0; 
let pages = [];


// show was setUp for us to invoke our function in different places 
const show = () => {
 displayData(pages[index]);
 displayBtn(pages,index);
};




const showData = async(url) => {
  const dataInfo = await fetchData(url);
  // const c was used to assign the value as an array

  const c = dataInfo.drinks;
  
 if (!c) {
title.textContent = "We couldn't find the cocktail you searched for please try another cocktail 🍸 ";
cocktailContainer.innerHTML = null;
btn.innerHTML = '';
alp.textContent = '';
return;
 }
  
  
   pages = paginateData(c); 
 //  console.log(pages[2]);
  show();
  
  
};


const btn = document.querySelector('.btnn-container');

btn.addEventListener("click", (e) =>{
  if (e.target.classList.contains('btnn')) {
  
    index = parseInt(e.target.dataset.index);
  }
  
  if (e.target.classList.contains('nxt')) {
    index++;
if ( index > pages.length - 1) {
  index = 0;
}
      
  }
  
  if (e.target.classList.contains('prev')) {
    index--; 
if (index < 0) {
  index = pages.length - 1 ;
}
      
  }
  
  show();
});




const cocktailL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='; 


const alphaContainer = document.querySelector('.alpha-container');


(alphaContainer.innerHTML  = `
 <button class="btn-alpha active" data-id="A">A</button>  
  <button class="btn-alpha" data-id="B">B</button>  
  <button class="btn-alpha" data-id="C">C</button>  
   <button class="btn-alpha" data-id="D">D</button>  
   <button class="btn-alpha" data-id="E">E</button>  
  <button class="btn-alpha" data-id="F">F</button>  
  <button class="btn-alpha" data-id="G">G</button>  
  <button class="btn-alpha" data-id="H">H</button>  
   <button class="btn-alpha" data-id="I">I</button>  
  <button class="btn-alpha" data-id="J">J</button>  
  <button class="btn-alpha" data-id="K">K</button>  
  <button class="btn-alpha" data-id="L">L</button>  
   <button class="btn-alpha" data-id="M">M</button>  
  <button class="btn-alpha" data-id="N">N</button>  
  <button class="btn-alpha" data-id="O">O</button>  
   <button class="btn-alpha" data-id="P">P</button>  
  <button class="btn-alpha" data-id="Q">Q</button>  
   <button class="btn-alpha" data-id="R">R</button>  
  <button class="btn-alpha" data-id="S">S</button>  
  <button class="btn-alpha" data-id="T">T</button>  
    <button class="btn-alpha" data-id="U">U</button>  
      <button class="btn-alpha" data-id="V">V</button>  
  <button class="btn-alpha" data-id="W">W</button>  
  <button class="btn-alpha" data-id="X">X</button>  
  <button class="btn-alpha" data-id="Y">Y</button>  
   <button class="btn-alpha" data-id="Z">Z</button> 
`);


const btnAlpha = document.querySelectorAll('.btn-alpha');
const search = document.querySelector('.drink');

btnAlpha.forEach((bt) => {
 bt.addEventListener("click", (e) => {
   search.value = '';
   const ide =  e.target.dataset.id;
   index = 0 ;
  show();
 if (ide) {
  btnAlpha.forEach((btn) =>{
  btn.classList.remove('active');
  e.target.classList.add('active');
  });
 }

 showData(`${cocktailL}${ide}`);
   });
});



export default showData;