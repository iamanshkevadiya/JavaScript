function number()
{
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let n3 = parseInt(document.getElementById('num3').value);

    if(n1>n2 && n1>n3)
        {
            msg = "N1 is Larget Number";
        }
    else if(n2>n3 && n2>n1)
        {
            msg = "N2 is Larget Number";
        }
    else
        {
            msg = "N3 is Larget Number";
        }

    document.getElementById('ans').innerHTML = msg;

}