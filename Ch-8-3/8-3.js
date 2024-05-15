function range()
{
    let num = parseInt(document.getElementById('num').value);
    let K = parseInt(document.getElementById('K').value);
    let txt="";
    
    for(let i = 1; i <= num; i++)
        {
            if(i%K==0)
                {
                    txt+=i;
                    txt+="<br>";
                }
        }
    document.getElementById('ans').innerHTML = txt;
}