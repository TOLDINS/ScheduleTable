 import checkFetchResponse from './checkFetchResponse';
async function getLessons(kaf,day){
  let current_date=new Date()
  let index=current_date.getDay();
  const body_req={
    kaf,
    day
  }

    
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body_req), // body data type must match "Content-Type" header
    };
    
    let result= fetch(`/admin/schedule/${kaf}/${day}`, requestOptions)
    .then(checkFetchResponse)
    .then((data) => {
      console.log(data);
      return data;
      
    })
    .catch((err) => console.error(err));
    //let result=income.sort(byField('couple'))
    return result;

}
async function getAllRooms(kaf){
 
   return await fetch(`/admin/schedule/${kaf}`).then(checkFetchResponse).then((data)=>{
       console.log(data)
       return data;
     })
    
     
   // return ['219','219а','221','223','224','226','230']

  
}
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}
async function Fetch(url,body){
  let response =[]

 

  // // try{
  // //    response = await fetch(url, {
  // //     method: 'POST', 
      
       
  // //    // cache: 'no-cache', 
  // //    // credentials: 'same-origin', 
  // //     headers: {
  // //       'Content-Type': 'application/json'
      
       


  // //     },

  // //   //  redirect: 'follow', 
  // //   //  referrerPolicy: 'no-referrer', 
  // //     // body: JSON.stringify(body) 
  // //   }
  // //   );
  // //   return response
    
  // } catch(e){
  //   console.log(e)
  // }

    

}
export {
   getLessons,
   getAllRooms
}
