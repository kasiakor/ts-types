class Person {
    //superclass constructor function
    constructor( public id: string, public name: string, public city: string) {
        //no statments required
    }
}

class Employee extends Person {
    //constructor function
    constructor( public readonly id: string, public name: string, private dep: string, public city: string) {
        //superclass constructor is envoked
        super(id, name, city);
    }
    //method
    writeDep() {
        console.log(`Person ${this.name} works in ${this.dep}`);
    }
}

class Customer extends Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number) {
        //superclass constructor is envoked
        super(id, name, city);
    }
}

class Supplier extends Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public companyName: string) {
        //superclass constructor is envoked
        super(id, name, city);
    }
}

let data = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000), ]


//argument of type 'Supplier' is not assignable to parameter of type 'Employee | Customer'.
data.push(new Supplier("tomk", "Tom Kim", "London", "bbc"));

data.forEach(item => {
    console.log(`Person's data: ${item.id}, ${item.name}, ${item.city}`);
    if(item instanceof Employee) {
        item.writeDep();
    }
    else if(item instanceof Customer) {
        console.log(`Cutomer ${item.name} has this limit ${item.creditLimit}`);
    }

    else if(item instanceof Supplier) {
        console.log(`Cutomer ${item.name} works for company called ${item.companyName}`);
    }
})



   
