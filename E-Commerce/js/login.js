function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let inp_email = localStorage.getItem("inp_email");
    let inp_pass = localStorage.getItem("inp_pass");

    if (email == inp_email && pass == inp_pass) {
        window.location.href = "home.html";

    } else {

        alert("email and pass is incorrect");
    }
}