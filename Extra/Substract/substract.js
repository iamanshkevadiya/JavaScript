function getsum(num1,num2,num3)
{
    let n = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let n3 = parseInt(document.getElementById('num3').value);
    let n4 = parseInt(document.getElementById('num3').value);

    return n-n2-n3-n4;
}

function Sum()
{
    let N = getsum(num1,num2,num3,num4);
    let msg= getsum();
    document.getElementById('ans').innerHTML ="Substract of Given Number is : " + msg;
}