class Sequence {
    constructor() {
        if (this.constructer == Sequence) {
            throw new Error("You Can't Contact/Connect Directly to Sequence ...");
        }
    }
    getValue(n) {}
}

class FibonacciSequence extends Sequence {

    constructor(){
        super();
    }
    getValue(n) 
    {
        if (n <= 0) {
            console.log("Please enter a positive Value..!");
        }

        let txt = " ", no1 = 0, no2 = 1, fibonacinum = 1;
        for (let i = 1; i <= n; i++) {
            txt += no1;
            txt += "<br>";
            fibonacinum = no1 + no2;
            no1 = no2;
            no2 = fibonacinum;
        }
        return fibonacinum;
    }

}

try{
    let fib = new FibonacciSequence();
    let Number = fib.getValue(3);
    console.log(`The Fibonacci number is :${Number}`);
}
catch(Error){
    console.log("Must override getValue method");
}