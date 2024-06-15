/* 
    Constructer :
        -> It is a block of code which is automatically execute when class is instantiated(to Create object).
        -> it can't return any value.

        Types ;
            -> Default
            -> Parameterized(Custom)

    Private Attributes :
        -> use "#" in prefix
        -> setter & getter
*/

class Emp{
    id;
    name;

    constructor(name,id){
        this.name = name;
        this.id = id;
        console.log(`Employee ${this.name} is a hired with id:${this.id}`);
    }
}

let e = new Emp("Aman",101);

// Private Attribute

class animal{
    #name;
    #type;

    // Setter
    set setname(name){
        this.#name = name;
    }
    set settype(type){
        this.#type = type;
    }

    // Getter
    get getname(){
        return this.#name;
    }
    get gettype(){
        return this.#type;
    }
}

let a = new animal();
a.setname("shiro");
a.getname();