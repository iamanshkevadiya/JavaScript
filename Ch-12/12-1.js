let myItems = Array();

function addItem() {
    let val = document.getElementById('inp-item').value;

    myItems.push(val);

    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = val;
    tr.append(td);
    table.append(tr);

}

function remItem(button){
    let val2 = document.getElementById('rem-item').value;

    delete myItems[val2];

    // let table = document.getElementById("table");
    // let tr = document.removeChild("tr")
    // let td = document.removeChild("td");

    // td.innerHTML = val2;
    // tr.append(td);
    // table.append(tr);

    console.log(myItems);
}