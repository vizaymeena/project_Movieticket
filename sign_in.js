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


  /* Js for singin page */



  // Signin funciton
  let signin=()=>{

    
  // storing input into variables 
  let inp_email = document.querySelector("#email").value.trim();
  let inp_password = document.querySelector("#password").value.trim();


    /* Login In Form Conditions */

    /*================================================ Username Condition ============================================= */

   /* Empty username ondition */
    if(inp_email=="" ){
      let erroremail = document.querySelector("#email");
      erroremail.placeholder= "empty username"; // showing error message into input username placeholder
      erroremail.style.color="red";
      erroremail.style.borderColor="red"
      return false;                     // do not submit form if condition doesn't matches.
    }
    /* condiiton for @ and .com missing in username */
    else if(!(inp_email.includes("@")) && !(inp_email.endswith(".com")) ){

      let erroremail = document.querySelector("#email");
      erroremail.placeholder = " '@ / .com' missing";

    }
    


     /* ============================================== Password Conditions ================================================ */

    /* Password conditions starts */

    /* When password is not a number */
    else if(isNaN(inp_password)){
      let errorpassword = document.querySelector("#password");
      errorpassword.placeholder="password should be in number";
      errorpassword.style.color="red"
      errorpassword.style.borderColor="red"
      return false;

    }
    /* when password does not have number and letters combo in it  */
    else if 
      (!((inp_password.match(/[1234567890]/)) && 
      (inp_password.match(/[a-z]/)) &&
      (inp_password.match(/[A-Z]/)))
       )
        {
      let errorpassword = document.querySelector("#password");
      errorpassword.placeholder="Password should contain number and letters"
      return false;;
       }
   





  }

  
