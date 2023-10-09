document.addEventListener('DOMContentLoaded',function(){
    let products=document.querySelector('.products')
    async function fetchProduct(url){
        let data=await fetch('url');
        let outcome= await data.json();
    }
    for(let i=0; i<outcome.length;i++){
        products.innerHTML+=`
        <div class="product">
                <img src="${outcome[i].image[1]}" alt="${outcome[i].title[i]}" class="product_img">
                <h2 class="title"></h2>
                <h4 class="description"></h4>
                <div class="product_price_container">
                    <h3 class="product_price"></h3>
                </div>
            </div>
            `
        }
        fetchProduct('https://fakestoreapi.com/products');
})