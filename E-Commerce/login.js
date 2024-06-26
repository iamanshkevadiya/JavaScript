function login(){
    
    let login_email = document.getElementById('login-email').value;
    let login_pass = document.getElementById('login-pass').value;

    let sing_email =localStorage.getItem("email-inp");
    let sing_pass =localStorage.getItem("pass-inp");

    if(login_email==sing_email && login_pass==sing_pass){
        window.location.href = 'home.html';
    }
    else{
        alert("Invalid email or password!");
    }
}