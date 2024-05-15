function forloop()
{
    let N = parseInt(document.getElementById('num').value);
    let txt="";
    for(let i=1; i<=N; i++)
        {
            txt+=i;
            txt+="<br>";
        }

    document.getElementById('ans').innerHTML = txt;
}