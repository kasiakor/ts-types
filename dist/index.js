class Customer {
    //constructor function
    constructor(id, name, city, creditLimit, music) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.music = music;
    }
    ;
    //implements person interface function
    getDetails() {
        return `${this.name} has got a credit limit of ${this.creditLimit}`;
    }
}
let alice = new Customer("aliceb", "Alice Barley", "Berlin", 500, "Classic");
let data = [new Customer("zarah", "Zara Howard", "Sidney", 23000, "Jazz"), alice];
//access to properties: getDetails(), name
data.forEach(item => {
    console.log(item.getDetails());
    if (item.getDogDetails) {
        console.log(item.getDogDetails());
    }
});
