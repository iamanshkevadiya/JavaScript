function number(num)
{
    let n = parseInt(document.getElementById('num').value);
    if(n%2==0){
        msg = "Even Number";
    }
    else{
        msg = "Odd Number";
    }

    return msg;
}

function OddNumber()
{
    let N = number(num);
    let msg = number();

    document.getElementById('ans').innerHTML = msg;
}