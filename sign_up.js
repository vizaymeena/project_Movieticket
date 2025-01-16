



let signup=()=>{

    // Inputs into variables
    let inp_username    =  document.querySelector("#username").value.trim();              //  username   \\
    let inp_email       =  document.querySelector("#email").value.trim();                //   email       \\
    let inp_password    =  document.querySelector("#password").value.trim();            //    password     \\
    let inp_confirmpass =  document.querySelector("#confirm_password").value.trim();   //     confirm pass. \\

    
    // Variables for Error of inputs 
    let err_user   = document.querySelector("#username")                                 //  username   \\
    let err_email  = document.querySelector("#email")                                   //   email       \\
    let err_pass   = document.querySelector("#password")                               //    password     \\
    let err_c_pass = document.querySelector("#confirm_password")                      //     Confirm-Pass  \\


    // saving user details on browser 
    localStorage.setItem("username",inp_username);
    localStorage.setItem("email",inp_email);
    localStorage.setItem("password",inp_password);
    localStorage.setItem("confirmpass",inp_confirmpass);

    
    /* Specifying rules for sign up form */

    // username remained empty
    if(inp_username == ""){      
 
        err_user.placeholder       = "Username should not be empty";
        err_user.style.borderColor = "red";
        err_user.classList.add("textcolor") ;     // Classlist for placeholder text for all conditions
        return false;
    }

   // Email empty
    else if (inp_email == ""){
      
        err_email.placeholder       = "Empty email";
        err_email.style.borderColor  = "red";
        err_email.classList.add("textcolor") ;     
        return false;
    }

    // Email not having @ and .com
    else if(!inp_email.includes("@") || !inp_email.endsWith(".com")){
 
        err_email.placeholder        = "Invalid email format";
        err_email.style.borderColor  = "red";
        err_email.classList.add("textcolor");
        return false;
    }

    // Password empty and not of 6 digits
    else if (inp_password.length < 6 || inp_password=="") {

        err_pass.placeholder = "Password must be at least 6 characters";
        err_pass.style.borderColor = "red";
        err_pass.classList.add("textcolor");
        return false;
    }

   

    /*   
        ^ and $ mark the start and end of the string. 
        + means that the string can have one or more of these characters. 
    
    */
    // password should be alphanumeric 
    else if (inp_password.match(/^[a-zA-Z0-9]/+$)){    
      
       
        err_pass.placeholder="password should alphanumeric";
        err_pass.style.borderColor  = "red";
        err_pass.classList.add("textcolor");
        return false;
    }

   // confirm password empty
    else if(inp_confirmpass==""){

        err_c_pass.placeholder="This field cannot be remain empty";
        err_c_pass.style.borderColor  = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    }

     // confirm password if entered wrong
    else if(inp_password!==inp_confirmpass){
 
        err_c_pass.placeholder="password do not match"
        err_c_pass.style.borderColor  = "red";
        err_c_pass.classList.add("textcolor");
        return false;

    }

    // resetting error styles 
    [err_user,err_c_pass,err_email,err_pass].forEach((e)=>{
        e.placeholder="";
        e.style.borderColor="";
        e.classList.remove("textcolor")
        return false;
    })

      
    location.href="sign_in.html"

    return false;
 

}
