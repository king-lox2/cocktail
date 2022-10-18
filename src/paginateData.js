

const paginateData = (items) => {

  const itemPerPage = 9;
  const totalItem = Math.ceil((items.length/itemPerPage));
  
  const infoArray = Array.from({length:totalItem},(_,index) =>{
    
    const start = index * itemPerPage;
    const end = start + itemPerPage;

 return items.slice(start,end);
  });

 return infoArray;
};

export default paginateData;