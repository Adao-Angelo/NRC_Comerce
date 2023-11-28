import { openUrl } from "../configuration/openUrl.js"

export function displayOnPesquise() {   
    let icon =document.querySelector('.pesquise i')
    icon.style.display ='none'    
    if (document.querySelector('.pesquiseInput').value == "") {    
       icon.style.display ='block'    
    }
    if(document.querySelector('.pesquiseInput').value != ""){

       
    }
    
}

