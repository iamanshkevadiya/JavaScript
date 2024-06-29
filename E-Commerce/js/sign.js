function sign() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let conform = document.getElementById("com_pass").value;

    window.localStorage.setItem("inp_email", email);

    if (email == "" && pass == "") {
        alert("Please Enter Email and Password first..!");
        return;
    }
    else if(email == "") {
        alert("Please Enter Email First..!");
    }
    if (pass == conform) {
        window.localStorage.setItem("inp_pass", pass);
        window.localStorage.setItem("conf1", conform);
        window.location.href = "home.html";
    }
    else {
        alert("please enter vaild password...");
    }
}
