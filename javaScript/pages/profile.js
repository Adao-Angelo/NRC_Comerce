import { openUrl } from "../configuration/openUrl.js";

if (!localStorage.getItem("sessionHigh")) {
    openUrl("signIn");
  }


function dataUser(){
 
    let userSession = JSON.parse(localStorage.getItem('sessionHigh'))
    let name = document.querySelector('.name')
    name.innerHTML= userSession.name
    let email = document.querySelector('.email')
    email.innerHTML = userSession.email

}
dataUser()

function logout(){
    
let arey = JSON.parse(localStorage.getItem('dataCartHigh'))
 for (let nu of arey) {
    
    sessionStorage.removeItem(`numberPHighi${nu.id}`)
    
 }

    sessionStorage.removeItem('sessionHigh')
    sessionStorage.removeItem('totalHigh')
    sessionStorage.removeItem('addProduto')
    localStorage.removeItem('dataCartHigh')
    sessionStorage.removeItem('numberPHigh')
    sessionStorage.removeItem('posicao')
    localStorage.removeItem('sessionHigh')
    sessionStorage.removeItem('dark-modeHigh')
    openUrl('signIn')
}
document.querySelector('.logout').addEventListener('click',logout)




const $html = document.querySelector('html')
const $checkbox= document.querySelector('#dark')


$checkbox.addEventListener('change', function(){
  if (localStorage.getItem('dark-modeHigh')){
   
    $html.classList.remove("dark-mode")
    localStorage.removeItem('dark-modeHigh')
  }else{
    $html.classList.add("dark-mode")
  localStorage.setItem('dark-modeHigh','dark-mode')
  }
    
  
})



if (localStorage.getItem('dark-modeHigh')) {
  $html.classList.add("dark-mode")
  
}