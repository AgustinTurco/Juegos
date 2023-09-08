const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
const visible = document.getElementById('visible')
const contra = 'agustin'
const email = 'juegos@gmail.com'

/*hacer visible la contracenia*/
visible.addEventListener("click", function(){
   if(password.type == "password"){
    password.type = "text"
   }else{
    password.type = "password"
   }

})

/*/ conprobacion de login */
button.addEventListener('click', (e) =>{

    if(e.target === button){
        if(password.value === contra  && username.value === email){
            e.preventDefault();
           
            window.location.href = "elegirjuegos.html";
            
        }
        else{
            alert("los datos no son correctos")
        }
    }
  
    

});


