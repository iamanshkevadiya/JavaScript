function Factorial() {
    let num = document.getElementById('num').value;
    let ans = fact(num);
    document.getElementById('dis').innerHTML = ans;
}
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}