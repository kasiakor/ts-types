//let hat = {id: 1, name: "hat", price: 100};
let gia = { id: "caranagia", name: "Gia", city: "Rome", company: "abc", dep: "sales" };
//type intersection
let dataItems = [gia];
dataItems.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    console.log(`Employee ${item.company}, ${item.dep}`);
});
