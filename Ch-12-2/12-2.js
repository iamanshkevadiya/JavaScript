let list1 = [];
let list2 = [];
let list3 = [];

let n=1;
let x=0;

function AddRow(){

  let name = document.getElementById('show');
  let NewRow = name.insertRow(n);

  list1[x] = document.getElementById('Ename').value;
  list2[x] = document.getElementById('id').value;
  list3[x] = document.getElementById('salary').value;

  let cel1 = NewRow.insertCell(0);
  let cel2 = NewRow.insertCell(1);
  let cel3 = NewRow.insertCell(2);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];

  n++;
  x++;
}