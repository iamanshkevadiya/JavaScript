function largenumber()
{
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);

    if(n1>n2)
        {
            msg = "N1 is Larget Number";
        }
    else if(n1<n2)
        {
            msg = "N2 is Larget Number";
        }
    else if(n1==n2)
        {
            msg = "N1 and N2 are Equal";
        }
    else
        {
            msg = "Please Enter Valid Input";
        }

    document.getElementById('ans').innerHTML = msg;

}