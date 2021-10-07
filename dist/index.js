let hat = { id: 1, name: "hat", price: 100 };
let gia = { id: "caranagia", name: "Gia", city: "Rome", company: "abc", dep: "sales" };
//type intersection
//type '{ id: number; name: string; price: number; }' is not assignable to type 'Product & Employee'.
//property 'city' is missing in type '{ id: number; name: string; price: number; }' but required in type 'Product'.
let dataItems = [gia, hat];
dataItems.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    console.log(`Employee ${item.company}, ${item.dep}`);
});
