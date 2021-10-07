//person shape
type Person = {
    id: string,
    name: string,
    city: string,
    contact: {name: string}
};

//employee shape
type Employee = {
    id: string,
    company: string,
    dep: string,
    contact: {phone: number}
};

//merging properties using shape types: contact: {name: string} & {phone: number}

type EmployedPerson = Person & Employee;


//declare let typeTest: string & number;
let typeTest = ({} as EmployedPerson).contact;

let person1: EmployedPerson = {id:"annab", name:"Anna Barley", city:"Paris", company:"abcd", dep: "slaes", contact: {name: "mobile", phone: 6985670987 }};
let person2: EmployedPerson = {id:"mariosg", name: "Marios Grey", city: "Milan", company: "median", dep: "marketing", contact: {name: "landline", phone: 2229870987 }};




   
