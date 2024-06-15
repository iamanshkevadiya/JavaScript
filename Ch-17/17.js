/* 
    OOP :
        - Main Concept of oop:
            -> Class 
            -> Object

        - In class we can used 
            -> Attributes (Like name, type, id, etc...)
            -> Constructer
            -> Setter
            -> Getter
            -> Events (on click,on send,etc..)
        
*/

class animal{
    name;
    type;
    
    setData(name,type){
        this.name = name;
        this.type = type;
    }
    getData(){
        console.log(`Name : ${this.name}`);
        console.log(`Type : ${this.type}`);
    }
}

let dog = new animal();
dog.setData("Chari","Domastic");
dog.getData();