import { openUrl} from "../openUrl.js";
 export function postUser(userD){
    let user =userD
     const name = user.name
     const email = user.email
     const password = user.password
   

    fetch('http://localhost:3000/users',
        {
            method:"POST",
            headers:{
                "Content-type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify(
                {
                    "name":`${name}`,
                    "email":`${email}`,
                    "password":`${password}`
                }
            )

        }
    )
    
    openUrl('home')
 }