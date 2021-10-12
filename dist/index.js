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
class Customer extends Person {
    //constructor function
    constructor(id, name, city, creditLimit) {
        //superclass constructor is envoked
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
}
class Supplier extends Person {
    //constructor function
    constructor(id, name, city, companyName) {
        //superclass constructor is envoked
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
}
let data = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000),];
//argument of type 'Supplier' is not assignable to parameter of type 'Employee | Customer'.
data.push(new Supplier("tomk", "Tom Kim", "London", "bbc"));
data.forEach(item => {
    console.log(`Person's data: ${item.id}, ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDep();
    }
    else if (item instanceof Customer) {
        console.log(`Cutomer ${item.name} has this limit ${item.creditLimit}`);
    }
    else if (item instanceof Supplier) {
        console.log(`Cutomer ${item.name} works for company called ${item.companyName}`);
    }
});
