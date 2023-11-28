import { openUrl } from "../configuration/openUrl.js";
if (!localStorage.getItem("sessionHigh")) {
    openUrl("signIn");
  }

  function dataCart(){   
     
    let container = document.querySelector('.produts')
    let datasCart = JSON.parse(localStorage.getItem('dataCartHigh')) 

    document.querySelector('.numberOfprodut').innerHTML = datasCart.length
   
    for( let dataCart of datasCart){
       

        const html = `
      

        <div class="produt">
        <input type="checkbox" name="check${dataCart.id}" id="check${dataCart.id}"/>
        <label for="check${dataCart.id}">
          <img src="${dataCart.image}"/>
        </label>
        <div class="description_p">
          <div>
            <h5>${dataCart.name}</h5>
            <h6>Varialt: Grey</h6>
          </div>
          <div class="buttom">
            <p class="subtitle">${dataCart.amount}</p>
            <div class="mm">
              <i onclick="menos(${dataCart.amount} ,'i${dataCart.id}')"

                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></i>
              <p id="i${dataCart.id}">${sessionStorage.getItem('numberPHigh')}</p>
              <i
              onclick="mais(${dataCart.amount} ,'i${dataCart.id}')"
              >
                <svg class="svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
              <i 
              onclick="remove(${dataCart.id})"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H5H21"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11V17"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></i>
            </div>
          </div>
        </div>
      </div>
`   
        total1(dataCart.amount)
       
         container.innerHTML += html         

    }

  }
  function total1(amount){
   

    let total = Number(sessionStorage.getItem('totalHigh')) 
    
    
    total = total +  Number((amount))
 
    sessionStorage.setItem('totalHigh', total)
 
    let container = document.querySelector('.total')
 
    const html = `
    <h6>TOTAL:</h6>
    <h6>$:${Math.trunc(total)}</h6>
    `
    container.innerHTML = html

 }
  dataCart()


  document.querySelector('.buttonAlert').addEventListener('click',
  document.querySelector('.alert').classList.remove('ative')
)
const $html = document.querySelector('html')
if (localStorage.getItem('dark-modeHigh')) {
   $html.classList.add("dark-mode")
   
 }