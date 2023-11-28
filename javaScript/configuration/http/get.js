
export function getUsers(){
 fetch('http://localhost:3000/users')
 .then(response => response.json())
 .then(users => sessionStorage.setItem('users',JSON.stringify(users)) )
}

export function getPublition(){
    fetch('http://localhost:3000/publicidades')
    .then(response => response.json())
    .then(publiction => sessionStorage.setItem('publictionHigh',JSON.stringify(publiction)) )
   }


   export function getProdutos(){
    fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(produtos => sessionStorage.setItem('produtosHigh',JSON.stringify(produtos)) )
   }


   