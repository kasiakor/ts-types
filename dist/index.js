class Person {
    //superclass constructor function
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
        //no statments required
    }
}
class Employee extends Person {
    //constructor function
    constructor(id, name, dep, city) {
        //superclass constructor is envoked
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.city = city;
    }
    //method
    writeDep() {
        console.log(`Person ${this.name} works in ${this.dep}`);
    }
}
let data = [new Person("zarah", "Zara Howard", "Sidney"), new Employee("nickc", "Nick Cave", "PA", "Denver")];
data.forEach(item => {
    console.log(`Person's data: ${item.id}, ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDep();
    }
});
