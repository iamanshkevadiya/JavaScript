function rnw()
{
    let n = parseInt(document.getElementById('num').value);
    let txt="";

    for(let i=1;i<=n;i++)
        {
            txt+="RED and WHITE"+"<br>";
        }
    document.getElementById('ans').innerHTML = txt;
}