//person shape
type Person = {
    id: string,
    name: string,
    city: string
}

class Employee {
    //constructor function
    constructor( public readonly id: string, public name: string, private dep: string, public city: string) {
        //no statments required
    }
    //method
    writeDep() {
        console.log(`Person ${this.name} works in ${this.dep}`);
    }
}

//compiler creates new instance of the class
let newPerson = new Employee("nickc", "Nick Cave", "PA", "Denver");

newPerson.writeDep();


   
