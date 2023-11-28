import { postUser } from "../configuration/http/post.js";
import { openUrl } from "../configuration/openUrl.js";
import { getUsers } from "../configuration/http/get.js";
getUsers();

if (localStorage.getItem("sessionHigh")) {
  openUrl("home");
}

export function getDataUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name == "" || email == "" || password == "") {
    document.querySelector('.alertP').classList.add('ative')

  } else {
    const users = JSON.parse(sessionStorage.getItem("users"));
    let index = 0
    for (let user of users) {
        index++
      if (index <= users.length && email == user.email && name == user.name && password == user.password) {
            sessionStorage.setItem('true',true)
      }  

      if (index >= users.length  && !sessionStorage.getItem('true')) {
        const dataUser = {
        name: name,
        email: email,
        password: password,
      };

      postUser(dataUser);
      openUrl("home");
      localStorage.setItem("sessionHigh", JSON.stringify(dataUser));
    
    }
    
  }
}
 if( sessionStorage.getItem('true')){
  document.querySelector('.alert').classList.add('ative')
  sessionStorage.removeItem('true')
 }
}
document.querySelector(".signUp").addEventListener("click", getDataUser);

document.querySelector('.buttonAlert').addEventListener('click', function(){
  document.querySelector('.alert').classList.remove('ative')
})
document.querySelector('.buttonAlertP').addEventListener('click', function(){
  document.querySelector('.alertP').classList.remove('ative')
})

