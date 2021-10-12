//describes object shape
interface Person {
    name: string;
    getDetails(): string;   
}

class Employee implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, private dep: string, public city: string) {}

    getDetails() {
        return `Employee works in deparatament of ${this.dep}`;
    }
}

class Customer implements Person {
    //constructor function
    constructor( public readonly id: string, public name: string, public city: string, public creditLimit: number) {}
    getDetails() {
        return `Customer credit limit is ${this.creditLimit}`;
    }
}


let data: Person[] = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000), ]


data.forEach(item => console.log(item.getDetails()));




   
