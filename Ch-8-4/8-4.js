function even()
{
    let num = parseInt(document.getElementById('num').value);
    let txt="";
    let sum=0;

    for(let i=1; i<=num; i++)
        {
            if(i>=0 && i%2==0)
                {
                    txt+=i;
                    sum+=i;
                    txt+="<br>";
                }
        }
    document.getElementById('ans').innerHTML = txt; 
    document.getElementById('sum').innerHTML = sum; 
}