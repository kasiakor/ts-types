class Employee {
    //constructor function
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    ;
    //implements person interface function
    getDetails() {
        return `${this.name} works for ${this.company}`;
    }
}
class Shoe {
    //constructor function
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
    ;
}
let data = [new Employee("Zara Howard", "Jazz Club"), new Employee("Alice Barley", "POSK"), new Shoe("Red shoes", "Trainers", 500)];
data.forEach(item => {
    //check if property exists on item
    if ("getDetails" in item) {
        console.log(item.getDetails());
    }
});
