let people = [
    { id: "annab", name: "Anna Barley", city: "Paris" },
    { id: "mariosg", name: "Marios Grey", city: "Milan" },
    { id: "kathyd", name: "Kathy Drill", city: "New York" }
];
let employees = [
    { id: "annab", company: "abc", dep: "sales" },
    { id: "mariosg", company: "marco", dep: "hr" },
    { id: "kathyd", company: "strom", dep: "marketing" }
];
//type intersection for data correlation
//used when objects come from different sources
function correlateData(peopleData, staff) {
    return peopleData.map(p => ({
        ...p, ...staff.find(e => e.id === p.id)
    }));
}
let dataItems = correlateData(people, employees);
dataItems.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.company}, ${item.dep}`);
    console.log(Array.isArray(dataItems));
});
