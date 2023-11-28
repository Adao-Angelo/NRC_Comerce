import { getPublition } from "../configuration/http/get.js";


export function watchPublicton(){
  
  getPublition()
  const publicidades = JSON.parse(sessionStorage.getItem('publictionHigh'))
  
  let container = document.querySelector('.public')

   for( let publicidade of publicidades){

    const Html = `
    <div class="image">
    <img src="${publicidade.image}" />
    </div>
    
    `
    
     container.innerHTML += Html
   }
   
}
