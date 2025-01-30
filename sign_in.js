/* vanta from internet source */


  
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
        errorpassword.style.color="red";
        erroremail.classList.add("input_bg_color")              // classlist for placeholder text color
        return false;                                          // do not submit form if condition doesn't matches.
  }


    /* condiiton for @ and .com missing in username */
    else if(!inp_email.includes("@") || !inp_email.endsWith(".com") ){

          erroremail.placeholder = "Invalid email format";
          erroremail.style.borderColor="red"
          errorpassword.style.color="red";
          erroremail.classList.add("input_bg_color")
          return false;
    }
    /* Incorrect email  */
    else if (inp_email!==stored_email){                                              
      erroremail.placeholder="email does not match"
      errorpassword.style.borderColor="red";
      errorpassword.style.color="red";
      erroremail.classList.add("input_bg_color")
      return false
    }

     /*  Password Conditions starts */

     else if(inp_password==""){
      errorpassword.placeholder="empty field"
      errorpassword.style.borderColor="red";
      errorpassword.style.color="red";
      errorpassword.classList.add("input_bg_password")
      return false;
     }

    /* Numbers and letter combos  */
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
          return false;
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
        return false
       }
  /* Password Conditions ends */
       

  // Reset errors
  [erroremail,errorpassword].forEach((e)=>{
    e.placeholder="";
    e.style.color="";
    e.classList.remove("input_bg_password");
  })

  /* Redirecting to home page */
  location.href="index.html";   
  return false;
          
}



/* Resetting password */


 // Shows popup
let resetPopup = () => {
  let reset = document.getElementById("popcontainer"); 
  reset.style.display = "block";
};

// Hides Popup
let resetPopdown = () => {
  let pop_box = document.getElementById("popcontainer"); 
  pop_box.style.display = "none";
};

// Send reset link function
let sendResetLink = () => {
  let email = document.getElementById("reset_email").value;
  if (email === "") {
      alert("Please enter your email.");
  } else {
      alert("A password reset link has been sent to " + email);
      resetPopdown();
  }
};

// Close modal when clicking outside
window.onclick = function(event) {
  let popcontainer = document.getElementById("popcontainer");
  if (event.target === popcontainer) {
      resetPopdown();
  }
};
