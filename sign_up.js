

// Inputs into variables

let inp_username = document.querySelector("#username").value.trim();
let inp_email = document.querySelector("#username").value.trim();
let inp_password = document.querySelector("#username").value.trim();
let inp_confirmpass = document.querySelector("#username").value.trim();

let signup=()=>{
                                                                   //            \\
    localStorage.setItem("name",inp_username);                    // username set \\
    localStorage.setItem("email",inp_email);                     //  email    set  \\
    localStorage.setItem("password",inp_password);              //   password set   \\
    localStorage.setItem("confirmPassword",inp_confirmpass);   //    cnfmpass set    \\


}
