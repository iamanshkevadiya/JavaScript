function Fibonaci() {
    let n = parseInt(document.getElementById('num').value);
    let txt = " ", i, no1 = 0, no2 = 1, fibonacinum;

    for (i = 1; i <= n; i++) {
        txt += no1;
        txt+="<br>";
        fibonacinum = no1 + no2;
        no1 = no2;
        no2 = fibonacinum;
    }
    document.getElementById('dis').innerHTML = txt;
}