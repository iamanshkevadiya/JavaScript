function speed()
{
    let dis = parseInt(document.getElementById('distance').value);
    let tim = parseInt(document.getElementById('time').value);
    let msg;
    let speed = dis/tim;

    if(speed > 40)
        {
            msg = " Apply Brake";
        }
    else 
        {
            msg = "Keep Going";
        }
    
    document.getElementById('ans').innerHTML = msg;
}