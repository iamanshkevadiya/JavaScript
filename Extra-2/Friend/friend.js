function friends()
{
    let N = parseInt(document.getElementById('num').value);
    let msg;
    if(N<13)
        {
            msg = "1 Kms";
        }
    else if(N>=13 && N<18)
        {
            msg = "5 Kms";
        }
    else if(N>=18 && N<30)
        {
            msg = "10 Kms";
        }
    else
        {
            msg = "You can have friends from anywhere";
        }

    document.getElementById('ans').innerHTML = msg;
}