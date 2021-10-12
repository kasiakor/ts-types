//person shape
type Person = {
    id: string,
    name: string,
    city: string
}

class Employee {
    public readonly id: string;
    public name: string;
    private dep: string;
    public city: string;

    //constructor function
    constructor(id: string, name: string, dep: string, city: string) {
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

//compiler creates new instance of the class
let newPerson = new Employee("nickc", "Nick Cave", "PA", "Denver");

//property 'dep' is private and only accessible within class 'Employee'.
//console.log(`New person works is ${newPerson.dep}`);
newPerson.writeDep();
console.log(newPerson.id);
//cannot assign to 'id' because it is a read-only property.
newPerson.id = "zarah";


//constructor will match the obj created by the constructor to the shape defined by the Anyname obj
let data: (Person | Employee)[] = 
[
    {id:"annab", name:"Anna Barley", city:"Paris"},
    {id:"mariosg", name: "Marios Grey", city: "Milan"},
    {id:"kathyd", name:"Kathy Drill", city:"New York"},
    newPerson
]

data.forEach(item => {
    if(item instanceof Employee) {
        item.writeDep();
    }
    else {
        console.log(item);
    }    
});
   
