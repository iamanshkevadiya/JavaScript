/*
    Working with DOm & JSON
*/

let obj = {
    id : 101,
    name : "Aman",
};

window.localStorage.setItem("Studata",JSON.stringify(obj));

function LoadData(){
    let Data = window.localStorage.getItem('Studata');
    let obj = JSON.parse(Data);

    console.log(obj['id']);
    console.log(obj['name.']);
}

LoadData();

