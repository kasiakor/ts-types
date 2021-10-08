//person shape
type Person = {
    id: string,
    name: string,
    city: string
}

class Employee {
    id: string;
    name: string;
    dep: string;
    city: string;

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
   
