class Employee {
    //constructor function
    constructor(id, name, dep, city) {
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.city = city;
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
