function sum(num)
{
    let N = parseInt(document.getElementById('num').value);
    if(N !=0){
        msg = N*50;
    }

    return msg;
}

function number()
{
    let n = sum(num);

    document.getElementById('ans').innerHTML ="Multiply : " +msg;
}