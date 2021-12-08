function fetchData(){
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
  //fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
  .then(response => {
      console.log(response);
      if(! response.ok){
          throw Error("ERROR");
      }
          return response.json();
  })
  .then(data =>{
      console.log(data);
      
      //map(user => user.price).filter((item) =>{ item ==14.99

      let html = data.filter(function (item) {
        return item.price == 14.99;
    }).map(function (item) {
      return ` 
      <div class="makeup">
      <h3>Brand:${item.brand}</h3><br>
      <h3>Name:${item.name}</h3>
            <h3>Price:${item.price}</h3>
            <img src="${item.image_link}" width="150" height="300">
      </div>`
      
  }).join("");
        
    
      //const html=data.filter(user=>{user.price==14.99}).map(item){
        
      console.log(html)
      document
      .querySelector("#app")
      .innerHTML=html;
  })
  .catch(error =>{
      console.log(error);
  });

}
fetchData();
