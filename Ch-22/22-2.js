let data = JSON.parse(window.localStorage.getItem('data')) || [];
let ifupdate = false;
let currentIndex;

function addData() {
    if (ifupdate) {
        update();
    } else {
        let name = document.getElementById("inp-name").value;
        let id = document.getElementById("inp-id").value;
        let age = document.getElementById("inp-age").value;

        data.push({
            id: id,
            name: name,
            age: age,
        });

    }
    window.localStorage.setItem("data", JSON.stringify(data));
    displaydata();
}

function displaydata() {
    let table = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    data.forEach((element, index) => {
        let row = document.createElement('tr');

        let tdname = document.createElement('td');
        let tdid = document.createElement('td');
        let tdage = document.createElement('td');
        let tdupd = document.createElement('td');
        let tddel = document.createElement('td');

        tdname.innerHTML = element.name;
        tdid.innerHTML = element.id;
        tdage.innerHTML = element.age;

        tdupd.innerHTML = `<input type="button" value="Update" onclick="updatedata(${index})">`;
        tddel.innerHTML = `<input type="button" value="Delete" onclick="deletedata(${index})">`;

        row.append(tdname);
        row.append(tdid);
        row.append(tdage);
        row.append(tdupd);
        row.append(tddel);

        table.append(row);
    });
}

function deletedata(index) {
    data = JSON.parse(window.localStorage.getItem("data")) || [];

    data.splice(index, 1);
    window.localStorage.setItem("data", JSON.stringify(data));
    displaydata();
}

function updatedata(index) {
    ifupdate = true;
    currentIndex = index;

    let inpName = document.getElementById("inp-name");
    let inpId = document.getElementById("inp-id");
    let inpAge = document.getElementById("inp-age");

    inpName.value = data[index].name;
    inpId.value = data[index].id;
    inpAge.value = data[index].age;

    document.getElementById("submit").value = "UPDATE";
}

function update() {
    let inpName = document.getElementById("inp-name").value;
    let inpId = document.getElementById("inp-id").value;
    let inpAge = document.getElementById("inp-age").value;


    data[currentIndex] = {
        id: inpId,
        name: inpName,
        age: inpAge,
    };


    window.localStorage.setItem("data", JSON.stringify(data));
    document.getElementById("submit").value = "SUBMIT";

}

displaydata();
