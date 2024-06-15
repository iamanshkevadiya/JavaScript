class A{
    #a;

    constructor(a){
        this.#a = a;
    }
    set setA(a){
        this.#a = a;
    }
    get getA(){
        return this.#a;
    }
}

class B{
    #b;

    constructor(a,b){
        super(a);
        this.#b = b;
    }
    set setB(b){
        this.#b = b;
    }
    get getB(){
        return this.#b;
    }
    printSum(){
        console.log(`Sum: ${super.getA + this.#b}`);
    }
}

let b = new B(11,22);
B.printSum();