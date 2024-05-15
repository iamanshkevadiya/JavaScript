function reverse(){
    let num = parseInt(document.getElementById('num').value);
    let rem,rev = 0;
    while(num !=0)
        {
            rem = num % 10;
            rev = rev * 10 + rem;
            num =  parseInt(num/10);
        }

    document.getElementById('ans').innerHTML = rev;
}