// document.addEventListener('DOMContentLoaded',function(){
//     let products=document.querySelector('.products')
//     async function fetchProduct(url){
//         let data=await fetch('url');
//         let outcome= await data.json();
//     }
//     for(let i=0; i<outcome.length;i++){
//         products.innerHTML+=`
//         <div class="product">
//                 <img src="${outcome[i].image[1]}" alt="${outcome[i].title[i]}" class="product_img">
//                 <h2 class="title"></h2>
//                 <h4 class="description"></h4>
//                 <div class="product_price_container">
//                     <h3 class="product_price"></h3>
//                 </div>
//             </div>
//             `
//         }
//         fetchProduct('https://fakestoreapi.com/products');
// })


document.addEventListener('DOMContentLoaded', async function () {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            console.log("data", data);
            let response = await data.json()
            console.log("response", response);
            console.log(typeof (response));
            console.log("data", typeof (data));
            for (i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
       <div class="product" style = " border-radius: 10px; box-shadow:  rgba(0, 0, 0, 0.35) 3px 1px 15px; display:flex; flex-wrap:wrap; flex-direction:column; width:500px; height:500px;padding: 1em; margin:2em;">
           <img width="100px" src="${response[i].image}" alt="${response[i].category
                    }" class="product-img" >
        <h2 class="product_title">${response[i].title}</h2>
        <h4 class="product_category">${response[i].category}</h4>
       <div class="product_details" style= "display:flex; flex-wrap:wrap;justify-content:space-between;  ">
       <div class="product_price"> <h3 >${response[i].price}</h3></div>
       <div class="product_rating"> <h4 >${response[i].rating.rate}</h4></div>
                      
                   </div>
                   </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }

    await fetchProducts('https://fakestoreapi.com/products');
});