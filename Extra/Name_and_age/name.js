function getname(id)
{
    return document.getElementById(id).value;
}

function getage(id){
    return parseInt(document.getElementById(id).value);
}

function nameandage(){
    let name = getname("name");
    let age = getage("age");
    document.getElementById("dis").innerHTML = name + "<br>" + age;
}