import {openUrl } from '../configuration/openUrl.js';
import { watchPublicton } from "../components/watchPubliction.js";
import { watchProdutos } from "../components/watchProdutos.js";
import { displayOnPesquise} from "../components/displayOnPesquise.js";
import { getProdutos } from "../configuration/http/get.js";
import { getPublition } from "../configuration/http/get.js";
if (!localStorage.getItem("sessionHigh")) {
    openUrl("signIn");
  }
getPublition()
getProdutos()
watchPublicton()
watchProdutos()

document.querySelector('.pesquiseInput').addEventListener('input',displayOnPesquise)


function dataCart(dataCart){
  if (!localStorage.getItem('dataCartHigh')) {
     localStorage.setItem('dataCartHigh',JSON.stringify([

     ]))
  }
  if (!sessionStorage.getItem('posicao')) {
     sessionStorage.setItem('posicao', 0)
  }
 
 let datasCart = JSON.parse(localStorage.getItem('dataCartHigh')) 
 document.querySelector('.numberOfprodut').innerHTML = datasCart.length

 
}

dataCart()

const $html = document.querySelector('html')
if (localStorage.getItem('dark-modeHigh')) {
   $html.classList.add("dark-mode")
   
 }





