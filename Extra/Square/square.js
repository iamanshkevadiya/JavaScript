function sum(num)
{
    let N = parseInt(document.getElementById('num').value);
    if(N !=0){
        msg = N*N;
    }

    return msg;
}

function square()
{
    let n = sum(num);

    document.getElementById('ans').innerHTML ="Square : " +msg;
}