let myitem=Array();

function addItem() {
    let val = document.getElementById('inp-item').value;

    myitem.push(val);
    console.log(myitem);
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = val;
    tr.append(td);
    table.append(tr);

}

function removeItems(){
    let val1= document.getElementById('rem-item').value;  
    let row = document.getElementById(val1);
    row.remove();
}

function updateItem()
{
    let oldVal = document.getElementById('old-item').value;
    let newVal = document.getElementById('new-item').value;

    
    let row = document.getElementById(oldVal);
    row.id = newVal;
    
    let td = document.getElementById("td" + oldVal);
    
    td.innerHTML = newVal;
    td.id = "td" + newVal;

}