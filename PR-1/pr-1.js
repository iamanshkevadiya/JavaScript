// Distance
function mtr(){
    let mtr = parseInt(document.getElementById('in-mtr').value);
    let feet = mtr * 3.281;
    document.getElementById('op-feet').innerHTML = "Feet :"+ feet;
}

function feet(){
    let feet = parseInt(document.getElementById('in-feet').value);
    let mtr = feet * 0.3048;
    document.getElementById('op-mtr').innerHTML = "Mtr :"+ mtr;
}

function km(){
    let mtr = parseInt(document.getElementById('in-mtr').value);
    let km = mtr / 1000;
    document.getElementById('op-km').innerHTML = "Km :"+ km;
}

function ktom(){
    let km = parseInt(document.getElementById('in-km').value);
    let mtr = km * 1000;
    document.getElementById('mtr').innerHTML = "Mtr :"+ mtr;
}

// Temperature

function f(){
    let fahren = parseInt(document.getElementById('in-f').value);
    let celsius = (fahren - 32)*5/9;
    document.getElementById('op-c').innerHTML = "Celsius :"+ celsius;
}

function c(){
    let celsius = parseInt(document.getElementById('in-c').value);
    let fahren = (celsius * 9/5)+32;
    document.getElementById('op-f').innerHTML = "Fahren :"+ fahren;
}

function k(){
    let kelvin = parseInt(document.getElementById('in-k').value);
    let fahren = (kelvin - 273.15)*9/5 + 32;
    document.getElementById('f').innerHTML = "Fahren :"+ fahren;
}

function ctok(){
    let celsius = parseInt(document.getElementById('c').value);
    let kelvin = celsius + 273.15;
    document.getElementById('k').innerHTML = "Kelvin :"+ kelvin;
}

// Currancy

function ind(){
    let usd = parseInt(document.getElementById('in-usd').value);
    let ind = usd * 83.477;
    document.getElementById('op-ind').innerHTML = "India Rupee :"+ ind;
}

function usd(){
    let ind = parseInt(document.getElementById('in-ind').value);
    let usd = ind * 0.01198;
    document.getElementById('op-usd').innerHTML = "USD Dollar :"+ usd;
}

function eur(){
    let eur = parseInt(document.getElementById('in-eur').value);
    let usd = eur * 1.07633;
    document.getElementById('usd').innerHTML = "USD Dollar :"+ usd;
}

function cad(){
    let cad = parseInt(document.getElementById('in-cad').value);
    let eur = cad * 0.67824;
    document.getElementById('op-eur').innerHTML = "EUR :"+ eur;
}