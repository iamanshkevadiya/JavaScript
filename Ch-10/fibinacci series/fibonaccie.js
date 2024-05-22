function fibona(){
    let n = parseInt(document.getElementById("num").value);
    let ans = fibonacci(n);
    document.getElementById("dis").innerHTML =  ans;
}
function fibonacci(n){
        if (n <= 1) {
            return n;
        } 
        else {
            return fibonacci(n - 2) + fibonacci(n - 1);
        }
}