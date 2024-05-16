function palindrome() {
    let n = parseInt(document.getElementById("num").value);
    let main = n
    let rem = 0
    let ans = 0 
    while(n != 0) {
        rem = n % 10 
        ans = ans * 10 + rem
        n = parseInt(n/10) 
    } 
    console.log(ans)
    if(main == ans){
        document.getElementById('display').innerHTML = "palidrome";
    } 
    else{
        document.getElementById('display').innerHTML = "not palidrome";
    }
}