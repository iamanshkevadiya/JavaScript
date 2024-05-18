function number(num)
{
    let N = parseInt(document.getElementById('num').value);
    if(N%3==0)
        {
            msg = "Yes";
        }
        else{
            msg = "No";
        }

        return msg;
}

function wood()
{
    let n = number(num);

    document.getElementById('ans').innerHTML = msg;
}