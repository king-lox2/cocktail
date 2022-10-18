const singleCenter = document.querySelector('.single-center');


const displaySingle = (items) => {
  const datas = items.drinks;
  const dataInfo = datas.map((data) =>{
  // destruturing
    const{
    strInstructions:guide,
    strCategory: category,
    strDrink:title,
    strDrinkThumb:img
    } = data;
    
    document.title = `${title}/${category}`;
  
  // assigning the ingredients to an array to be able to display the total ingredients for each cocktail

  const ingredients = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
    ];
   
   const displayIngredients = ingredients.map((ingredient) =>{
     if (!ingredient) {
       return;
     }
     return `<li>${ingredient}</li>`;
   }).join('');
   
    
    return `
    <div>
   <img  src="${img}" alt="${title}" />
   </div>
   
    <div class='content'> 
<p class="des t">Title : 
  <span>${title}</span>
 </p>
   <p class="des t">Category :  
   <span>${category}</span>
   </p>
   
   <p class="des t">Guidelines : 
     <span>${guide}</span>
    </p>
    
   <p class="des t">Ingredients required 
     <span>${displayIngredients}</span>
    </p>
    </div>
    `;
  }).join('');
  
 singleCenter.innerHTML = `
 <div class="single-container">
  ${dataInfo}
 </div>
 `;
};


export default displaySingle;