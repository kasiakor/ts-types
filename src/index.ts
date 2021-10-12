abstract class Person {
    //superclass constructor function
    constructor( public id: string, public name: string, public city: string) {
        //no statments required
    }

    getDetails(): string {
        return this.getMoreDetails();
    }

    abstract getMoreDetails(): string;
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

    getMoreDetails() {
        return `Employee works in deparatament of ${this.dep}`;
    }
}

class Customer {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number) {
        //superclass constructor is envoked
    }
}


let data: (Person | Customer)[] = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000), ]


data.forEach(item => {

    if(item instanceof Person) {
        console.log(item.getDetails());
    }

    else {
        console.log(`Credit limit for Customer is ${item.creditLimit}`);
    }
})




   
