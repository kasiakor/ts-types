class Person {
    //superclass constructor function
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
        //no statments required
    }
    getDetails() {
        return this.getMoreDetails();
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
    getMoreDetails() {
        return `Employee works in deparatament of ${this.dep}`;
    }
}
class Customer {
    //constructor function
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        //superclass constructor is envoked
    }
}
let data = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000),];
data.forEach(item => {
    if (item instanceof Person) {
        console.log(item.getDetails());
    }
    else {
        console.log(`Credit limit for Customer is ${item.creditLimit}`);
    }
});
