class Employee {
    //constructor function
    constructor(id, name, dep, city) {
        this.id = id;
        this.name = name;
        this.dep = dep;
        this.city = city;
    }
    getDetails() {
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
    }
    getDetails() {
        return `Customer credit limit is ${this.creditLimit}`;
    }
}
let data = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000),];
data.forEach(item => console.log(item.getDetails()));
