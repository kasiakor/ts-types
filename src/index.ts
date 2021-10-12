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

let data = [new Person("zarah", "Zara Howard", "Sidney"), new Employee("nickc", "Nick Cave", "PA", "Denver")]

data.forEach(item => {
    console.log(`Person's data: ${item.id}, ${item.name}, ${item.city}`);
    if(item instanceof Employee) {
        item.writeDep();
    }
})



   
