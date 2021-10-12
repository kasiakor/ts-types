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
    getMoreDetails() {
        return `Customer has a credit lomit of ${this.creditLimit}`;
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
    getMoreDetails() {
        return `Employee works in deparatament of ${this.companyName}`;
    }
}
let data = [new Employee("nickc", "Nick Cave", "PA", "Denver"), new Customer("zarah", "Zara Howard", "Sidney", 23000),];
data.push(new Supplier("tomk", "Tom Kim", "London", "bbc"));
data.forEach(item => console.log(item.getDetails()));
