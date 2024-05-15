function mintomax()
{
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let txt="";
    
    for(let i = min; i < max; i++)
        {
            txt+=i;
            txt+="<br>";
        }
    document.getElementById('ans').innerHTML = txt;
}