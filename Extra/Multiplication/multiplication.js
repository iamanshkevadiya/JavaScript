function getsum(num1,num2,num3,num4,num5)
{
    let n = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    let n3 = parseInt(document.getElementById('num3').value);
    let n4 = parseInt(document.getElementById('num4').value);
    let n5 = parseInt(document.getElementById('num5').value);

    return n*n2*n3*n4*n5;
}

function Sum()
{
    let N = getsum(num1,num2,num3,num4,num5);
    let msg= getsum();
    document.getElementById('ans').innerHTML ="Multiplication of Given Number is : " + msg;
}