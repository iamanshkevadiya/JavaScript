function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let inp_email = localStorage.getItem("inp_email");
    let inp_pass = localStorage.getItem("inp_pass");

    if (email == inp_email && pass == inp_pass) {
        window.location.href = "home.html";

    }
    else if (pass !== inp_pass){
        alert("Password Not Match..!");
    }
    else if (email !== inp_email){
        alert("Email Not Match..!");
    }
    else {

        alert("email and pass is incorrect");
    }
}