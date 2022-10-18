
const btn = document.querySelector('.btnn-container');


const displayBtn = (pages,activeIndex) => {
const pageBtns = pages.map((_,index) =>{
  
  return `
  <button class='btnn ${activeIndex === index ? 'active' : 'null'}' data-index=${index}>${index + 1}</button>
  `; 
});

pageBtns.unshift(`<button class='prev'>prev</button>`);

pageBtns.push(`<button class='nxt'>next</button>`);


btn.innerHTML = pageBtns.join('');
};

export default displayBtn;