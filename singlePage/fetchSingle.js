
const singleCenter = document.querySelector('.single-center');

const fetchSingle = async(url) => {
  // loading spinner
singleCenter.innerHTML = `
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
    console.log(error);
  }
};

export default fetchSingle;