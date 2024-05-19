function compare()
{
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let msg;

    if(n1>n2)
        {
            msg = "True";
        }
    else
        {
            msg = "False";
        }
        document.getElementById('ans1').innerHTML = msg;
    let n3 = parseInt(document.getElementById('num3').value);

    if(n2>n3)
        {
            msg = "True";
        }
    else 
        {
            msg = "False";
        }

    document.getElementById('ans2').innerHTML = msg;
}