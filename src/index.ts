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

class Customer extends Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number) {
        //superclass constructor is envoked
        super(id, name, city);
    }
    getMoreDetails() {
        return `Customer has a credit lomit of ${this.creditLimit}`;
    }
}

class Supplier extends Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public companyName: string) {
        //superclass constructor is envoked
        super(id, name, city);
    }

     getMoreDetails() {
        return `Employee works in deparatament of ${this.companyName}`;
    }
}

let data: Person[] = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000), ]

data.push(new Supplier("tomk", "Tom Kim", "London", "bbc"));

data.forEach(item => console.log(item.getDetails()));




   
