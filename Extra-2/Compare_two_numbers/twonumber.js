function two()
{
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);

    if(n1>n2)
        {
            msg = "True";
        }
    else 
        {
            msg = "False";
        }

    document.getElementById('ans').innerHTML = msg;

    if(n1<n2)
        {
            msg = "True";
        }
    else 
        {
            msg = "False";
        }

    document.getElementById('ans1').innerHTML = msg;

    if(n1==n2)
        {
            msg = "True";
        }
    else 
        {
            msg = "False";
        }

    document.getElementById('ans2').innerHTML = msg;
}