let signup = (event) => {
    event.preventDefault(); // Prevent form submission

    let inp_username    = document.querySelector("#username").value.trim();
    let inp_email       = document.querySelector("#email").value.trim();
    let inp_password    = document.querySelector("#password").value.trim();
    let inp_confirmpass = document.querySelector("#confirm_password").value.trim();

    let err_user   = document.querySelector("#username"); 
    let err_email  = document.querySelector("#email");    
    let err_pass   = document.querySelector("#password");  
    let err_c_pass = document.querySelector("#confirm_password");

    // Validation checks (each condition stops further checks)
    if (inp_username === "") {      
        err_user.placeholder = "Username should not be empty";
        err_user.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (inp_email === "") {
        err_email.placeholder = "Empty email";
        err_email.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (!inp_email.includes("@") || !inp_email.endsWith(".com")) {
        err_email.placeholder = "Invalid email format";
        err_email.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (inp_password.length < 6) {
        err_pass.placeholder = "Password must be at least 6 characters";
        err_pass.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (!inp_password.match(/^(?=.*[a-zA-Z])(?=.*\d).+$/)) {
        err_pass.placeholder = "Password must contain letters and numbers";
        err_pass.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (inp_confirmpass === "") {
        err_c_pass.placeholder = "This field cannot remain empty";
        err_c_pass.style.borderColor = "red";
        err_c_pass.classList.add("textcolor");
        return false;
    } 
    else if (inp_password !== inp_confirmpass) {
        err_c_pass.placeholder = "Passwords do not match";
        err_c_pass.style.borderColor = "red";
        err_c_pass.classList.add(".textcolor");
        return false;
    }

    // Reset error styles
    [err_user, err_c_pass, err_email, err_pass].forEach((e) => {
        e.placeholder = "";
        e.style.borderColor = "";
        e.classList.remove("textcolor");
    });

    // Save to localStorage after validation
    localStorage.setItem("username", inp_username);
    localStorage.setItem("email", inp_email);
    localStorage.setItem("password", inp_password);

    // Redirect to sign-in page
    location.href = "sign_in.html";

    return false;
};

// This selects the first form element on the page.
document.querySelector("form").addEventListener("submit", signup);
