import { getProdutos } from "../configuration/http/get.js";

export function watchProdutos(){
    getProdutos()
   let container = document.querySelector('.produts')
   const produtos = JSON.parse(sessionStorage.getItem('produtosHigh'))

    for (let produto of produtos) {

        const Html = `
           
        <div class="produt">

        <div  class=" pd produto${produto.id}" onclick=" addDetails(${produto.id})">
            <img src="${produto.image}" />
            <div class="description_search">
            <div class="splitch">
            <p class="txtmine">${produto.name}</p>
            <p class="subtitle">$${produto.amount}</p>
        </div>
        </div>
        </div>
       
          <button type="button" class="button-mine button${produto.id}" onclick="add_cart(${produto.id})">
            add to cart
          </button>
        </div>
      
        `
        container.innerHTML += Html
    }

}