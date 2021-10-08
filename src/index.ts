//person shape
type Person = {
    id: string,
    name: string,
    city: string
}

type Anyname = {
    id: string,
    name: string,
    dep: string,
    city: string,
    writeDep: () => void
}

//constructor function
let Employee = function(id: string, name: string, dep: string, city: string) {
    this.id = id,
    this.name = name,
    this.dep = dep,
    this.city = city
}

let newPerson = new Employee("nickc", "Nick Cave", "PA", "Denver");

Employee.prototype.writeDep = function(){
    console.log(`${this.name} works in ${this.dep}`);
}

//constructor will match the obj created by the constructor to the shape defined by the Anyname obj
let data: (Person | Anyname)[] = 
[
    {id:"annab", name:"Anna Barley", city:"Paris"},
    {id:"mariosg", name: "Marios Grey", city: "Milan"},
    {id:"kathyd", name:"Kathy Drill", city:"New York"},
    newPerson
]

data.forEach(item => {
    if("dep" in item) {
        item.writeDep();
    }
    else {
        console.log(item);
    }    
});
   
