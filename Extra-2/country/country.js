function two()
{
    let Australia  = parseInt(document.getElementById('num1').value);
    let England = parseInt(document.getElementById('num2').value);

    if(Australia>England)
        {
            msg = "Australia";
        }
    else if(Australia<England)
        {
            msg = "England";
        }
    else if(Australia==England)
        {
            msg = "Tie";
        }

    document.getElementById('ans').innerHTML = msg;
}