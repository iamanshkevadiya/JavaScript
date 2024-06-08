function validDetails(){
    let name  = document.querySelector('#name').value;
    let email  = document.querySelector('#email').value;
    let number  = document.querySelector('#number').value;
    let password  = document.querySelector('#Password').value;

    // Name Validation
    if(name == null || name == ""){
        alert("Pleas Enter Your Name..!");
    }

    // Email Validation
    if(email == null || email == ""){
        alert("Enter Email First !!");
    }
    else{
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let isEmail = reg.test(email);

        if(isEmail){}
        else{
            alert("Enter a Valid Email !!");
        }
    }

    // Number Validation
    if(number == null || number == ""){
        document.querySelector("#num").innerHTML = "Enter Number !";
    }
    else{
        document.querySelector("#num").innerHTML = "";
    }

    // Password Validation
    if(password == null || password == ""){
        document.querySelector('#pass').innerHTML = "Enter password First....";
    }
    else{
        document.querySelector("#pass").innerHTML = "";
    }

    document.querySelector("#display").innerHTML = "Welcome "+name;
}