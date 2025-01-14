/* vanta from internet source */
window.VANTA.BIRDS({
 el: "#page1",
 mouseControls: true,
 touchControls: true,
 gyroControls: false,
 minHeight: 200.00,
 minWidth: 200.00,
 scale: 1.00,
 scaleMobile: 1.00,
 color1: 0x4e40a6,
 birdSize: 0.70,
 separation: 60.00,
 quantity: 4.00,
 backgroundAlpha: 0.00
})


  
   let signin=()=>{

   // storing input into variables 
   let inp_email = document.querySelector("#email").value.trim();
   let inp_password = document.querySelector("#password").value.trim();

   // error variables
   let erroremail = document.querySelector("#email");
   let errorpassword = document.querySelector("#password");
   
   // stored details varibales
   let stored_email = localStorage.getItem("email");
   let stored_password = localStorage.getItem("password");

   

   /*========================================== Username Condition ============================================= */

   /* Empty username ondition */
  if(inp_email=="" ){
  
        erroremail.placeholder = "Please fill up username";       // error shows in placeholders
        erroremail.style.borderColor="red"
        erroremail.classList.add("input_bg_color")              // placeholder text-color
        return false;                                          // do not submit form if condition doesn't matches.
  }


    /* condiiton for @ and .com missing in username */
    else if(!inp_email.includes("@") || !inp_email.endsWith(".com") ){

          erroremail.placeholder = "Invalid email format";
          erroremail.style.borderColor="red"
          erroremail.classList.add("input_bg_color")
          return false;
    }
     
    else if (inp_email!==stored_email){                                               // Incorrect email entered
      erroremail.placeholder="email does not match"
      erroremail.classList.add("input_bg_color")
    }

     /* ========================================= Password Conditions =========================================== */


    /* when password does not have number and letters combo in it  */
    else if 
      (!((inp_password.match(/[1234567890]/)) && 
      (inp_password.match(/[a-z]/)) &&
      (inp_password.match(/[A-Z]/)))
       )
        {
          errorpassword.placeholder="Password should be a mix up of numbers and letters";
          errorpassword.style.borderColor="red";
          errorpassword.style.color="red";
          errorpassword.classList.add("input_bg_password")
          return false;;
       }
        

      /* Password length is not equal to 6 digit */
    else if(inp_password.length<6){
            errorpassword.placeholder="Password should be of 6 digits";
            errorpassword.style.borderColor="red";
            errorpassword.style.color="red";
            errorpassword.classList.add("input_bg_password")
            return false;;
       }
       else if (inp_password!==stored_password){
        errorpassword.placeholder="Password does not match";
        errorpassword.classList.add("input_bg_color");
       }
  //==================================================  P. ENDS  ===============================================//
       

  // Reset errors
  [erroremail,errorpassword].forEach((e)=>{
    e.placeholder="";
    e.style.color="";
    e.classList.remove("input_bg_password");
  })



     location.href="index.html";                // Redirecting to Home Page..
     return true;                              // optional as it will run obivously after above condition gets true 

  
          
  }

  
