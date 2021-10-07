//person shape
type Person = {
    id: string,
    name: string,
    city: string
}

//employee shape
type Employee = {
    id: string,
    company: string,
    dep: string
}

//merging properties with the same type: id: string, e.id === p.id

type EmployedPerson = Person & Employee;

let people: Person[] = 
[
    {id:"annab", name:"Anna Barley", city:"Paris"},
    {id:"mariosg", name: "Marios Grey", city: "Milan"},
    {id:"kathyd", name:"Kathy Drill", city:"New York"}
]

let employees: Employee[] = 
[
    {id: "annab", company: "abc", dep: "sales" },
    {id: "mariosg", company: "marco", dep: "hr" },
    {id: "kathyd", company: "strom", dep: "marketing" }
];

//type intersection for data correlation
//used when objects come from different sources

function correlateData(peopleData, staff): EmployedPerson[] {
    return peopleData.map(p => ({
        ...p, ...staff.find(e => e.id === p.id)

    }));
}

let dataItems: EmployedPerson[] = correlateData(people, employees);

dataItems.forEach(item => {
   
        console.log(`Person: ${item.name}, ${item.city}`);
        console.log(`Employee: ${item.company}, ${item.dep}`);
        console.log(Array.isArray(dataItems));
});
   
