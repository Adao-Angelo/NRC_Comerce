import { openUrl } from "../configuration/openUrl.js";
import { getUsers } from "../configuration/http/get.js";
if (localStorage.getItem("sessionHigh")) {
  openUrl("home");
}
getUsers();

function getDataInputs() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  validatorData(email, password);
}
document.querySelector(".signIn").addEventListener("click", getDataInputs);

function validatorData(email, password) {
  const users = JSON.parse(sessionStorage.getItem("users"));
  
  let index = 1;
  for (let user of users) {
    if (email == user.email && password == user.password) {

         document.querySelector('.alert2').classList.add('ative')
         setInterval(function(){
          document.querySelector('.alert2').classList.remove('ative')
          localStorage.setItem('sessionHigh', JSON.stringify(user))
          openUrl('home')
         },2000)


        
    } else if (email != user.email || password != user.password) {
      index++;
      if (index >= users.length) {

        document.querySelector(".alert").classList.add("ative");
      }
    }
  }
}
document.querySelector('.buttonAlert').addEventListener('click',function(){
    removeAtive()
 })
 function removeAtive(){  
    document.querySelector('.alert').classList.remove('ative')
 }
