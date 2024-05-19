function even()
{
    let N = parseInt(document.getElementById('num').value);
    let msg;

    if(N%2==0)
        {
            msg = "it's an even number";
        }
    else   
        {
            msg = "it's an odd number";
        }

    document.getElementById('ans').innerHTML = msg;
}