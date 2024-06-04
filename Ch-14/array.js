let allstudent = [
    {
        id:101,
        name:"Aman",
        per:87.41,
    },
    {
        id:102,
        name:"Aman",
        per:87.41,
    },
    {
        id:103,
        name:"Aman",
        per:87.41,
    },
    {
        id:104,
        name:"Aman",
        per:87.41,
    },
];

function addstudent(id,name,per){
    let std = {
        id:id,
        name:name,
        per:per,
    };

    allstudent.push(std);
}

addstudent(105,"Yash",88.50);