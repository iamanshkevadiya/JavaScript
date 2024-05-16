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
    let msg;
    if(percentage>=90)
        {
            msg="Congratulations You got A1 grade..";
        }
    else if(percentage>=80)
        {
            msg="Congratulations You got A grade..";
        }
    else if(percentage>=70)
        {
            msg="You got B1 grade..";
        }
    else if(percentage>=60)
        {
            msg="You got B grade..";
        }
    else if(percentage>=50)
        {
            msg="You got C grade..";
        }
    else if(percentage>=40)
        {
            msg="You got C1 grade..";
        }
    else
        {
            msg="Failed";
        }

    document.getElementById('display').innerHTML = msg;
    
    document.getElementById('name').innerHTML = "Name :"+name;
    document.getElementById('std').innerHTML = "Standard :"+std;
    document.getElementById('totalmark').innerHTML = "Totalmarks :"+totalmark;
    document.getElementById('per').innerHTML = "percentage :"+percentage + '%';
}