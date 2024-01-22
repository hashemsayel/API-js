async function phone (){
    const response = await fetch("https://dummyjson.com/product");
    const data =await response.json();
    const products= data.products
    
    const items=products.map( function(product){

    return `
  
    <div class="items">
  <span> id: ${product.id} </span>
  <h3 > name:   ${product.title}</h3>
  <span  class="price"> price:   ${product.price}$</span>
   <img src=" ${product.thumbnail}" />
  <span> rating: ${product.rating}</span>
  <span> stoock: ${product.stock}</span>
  <span> brand: ${product.brand}</span>
  </div>
  `
    

    }).join('')
    document.querySelector(".data").innerHTML=items;
}
phone();