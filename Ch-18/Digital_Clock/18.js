/* 
    Timing Functions :
        1. Time Out
        2. Interval

        1. Time Out
            -> Occures single time only
                1) 
                - settimeout(function,milliseconds);
                - clearTimeout(timeoutVarID)

        2. Interval
            -> Occures Repeatedly
                1) 
                - setInterval(function,milliseconds);
                - clearTimeout(intervalVarID)

*/

let h = 0;
let m = 0;
let s = 0;

function Clock(){
    s++;
    if(s == 59){
        m++;
        s = 0;
    }
    if(m == 59){
        h++;
        m = 0;
    }
    document.getElementById("h").innerHTML = h + "   :   ";
    document.getElementById("m").innerHTML = m + "   :   ";
    document.getElementById("s").innerHTML = s;
}

let t = setInterval(Clock,100);