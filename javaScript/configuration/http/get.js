import { baseUrl } from "./baseUrl"

export function getUsers(){
 fetch(`${baseUrl}/users`)
 .then(response => response.json())
 .then(users => sessionStorage.setItem('users',JSON.stringify(users)) )
}

export function getPublition(){
    fetch(`${baseUrl}publicidades`)
    .then(response => response.json())
    .then(publiction => sessionStorage.setItem('publictionHigh',JSON.stringify(publiction)) )
   }


   export function getProdutos(){
    fetch(`${baseUrl}produtos`)
    .then(response => response.json())
    .then(produtos => sessionStorage.setItem('produtosHigh',JSON.stringify(produtos)) )
   }


   