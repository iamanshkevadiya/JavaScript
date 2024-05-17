function Grade()
{
    let name = document.getElementById('name').value;
    let std = document.getElementById('std').value;
    let sub1  = parseInt(document.getElementById('st').value);
    let sub2  = parseInt(document.getElementById('eng').value);
    let sub3  = parseInt(document.getElementById('ac').value);
    let sub4  = parseInt(document.getElementById('math').value);
    let sub5  = parseInt(document.getElementById('sci').value);

    let totalmark = sub1+sub2+sub3+sub4+sub5;
    let percentage = (totalmark/500)*100;

    let grade;
    if(percentage>=90)
        {
            grade="Congratulations You got A1 grade..";
        }
    else if(percentage>=80)
        {
            grade="Congratulations You got A grade..";
        }
    else if(percentage>=70)
        {
            grade="You got B1 grade..";
        }
    else if(percentage>=60)
        {
            grade="You got B grade..";
        }
    else if(percentage>=50)
        {
            grade="You got C grade..";
        }
    else if(percentage>=40)
        {
            grade="You got C1 grade..";
        }
    else
        {
            grade="Failed";
        }

        // var table = "<table border='3'>";
        // table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
        // table += "<tr><td>Standard:</td><td>" + std + "</td></tr>";
        // table += "<tr><td>Total Marks:</td><td>" + totalmark + "</td></tr>";
        // table += "<tr><td>Percentage:</td><td>" + percentage+ "%</td></tr>";
        // table += "<tr><td>Grade:</td><td>" + grade + "</td></tr>";
        // table += "</table>";
    
        // document.getElementById("display").innerHTML = table;

        
        document.getElementById('nam').innerHTML = "Name :"+name;
        document.getElementById('standard').innerHTML = "Standard :"+std;
        document.getElementById('totalmark').innerHTML = "Totalmarks :"+totalmark;
        document.getElementById('per').innerHTML = "percentage :"+percentage + '%';
        document.getElementById('display').innerHTML = grade;
}