function Nsum(){
    let s = parseInt(document.getElementById("start").value);
    let e = parseInt(document.getElementById("end").value);
    
    number(s,e);
}
function number(s,e){
    document.getElementById("ans").innerHTML = s + " ";
    if(s==e){
        number(s+e);
    }
}
