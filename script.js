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
        const html=data.map(user =>{ 
            return ` 
            
            <div class="makeup">
            <h3>Brand:${user.brand}</h3>
            <h3>Name:${user.name}</h3>
            <h3>Price:${user.price}</h3>
            <img src="${user.image_link}" width="150" height="300">
            
            <p>Description:${user.description}</p>
            </div>
            
            `
            
        }).join("");
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
//console.log("hello");
