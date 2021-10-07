//person shape
type Person = {
    id: string,
    name: string,
    city: string,
    contact: string
}

//employee shape
type Employee = {
    id: string,
    company: string,
    dep: string,
    contact: number
}

//merging properties with the different type: contact: string, contact: number

type EmployedPerson = Person & Employee;


//declare let typeTest: string & number;
let typeTest = ({} as EmployedPerson).contact;


//Type 'string' is not assignable to type 'string & number'.
//Type 'string' is not assignable to type 'number'.
//Type 'number' is not assignable to type 'string & number'.
//Type 'number' is not assignable to type 'string'
let person1: EmployedPerson = {id:"annab", name:"Anna Barley", city:"Paris", contact:"mobile"};
let person2: EmployedPerson = {id:"mariosg", name: "Marios Grey", city: "Milan", contact: 6985670987};




   
