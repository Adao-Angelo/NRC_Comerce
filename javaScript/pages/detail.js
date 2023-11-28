if (!localStorage.getItem("sessionHigh")) {
    openUrl("signIn");
  }

   function dataDetails(){
      let id = sessionStorage.getItem('idHigh')
   
      fetch(`http://localhost:3000/produtos/${id}`)
      .then(produtos => produtos.json())
      .then(datasProdutos => sessionStorage.setItem('produtoDetail',JSON.stringify(datasProdutos )))
    
    
        let produto = JSON.parse(sessionStorage.getItem('produtoDetail'))
        document.querySelector('.imageP').innerHTML =  `
        <img

        class="image"
        src="${produto.image}"
        alt="IMAGEN DO PRODUTO"
      />
        `
        document.querySelector('.nameP').innerHTML = produto.name
         document.querySelector('.descriptionP').innerHTML = produto.description
         document.querySelector('.amount ').innerHTML = `
         $ ${produto.amount} <span class="txtmine">[291 pessoas que compraram isto]</span>
         
         `
    
    }

 dataDetails()


 function dataCart(){

 
 let datasCart = JSON.parse(localStorage.getItem('dataCartHigh')) 

 document.querySelector('.numberOfprodut').innerHTML = datasCart.length
}
 dataCart()
 const $html = document.querySelector('html')
 if (localStorage.getItem('dark-modeHigh')) {
    $html.classList.add("dark-mode")
    
  }