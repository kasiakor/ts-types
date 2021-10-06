let hat = { id: 1, name: "hat", price: 100 };
let gloves = { id: 2, name: "gloves", price: 75 };
let umbrella = { id: 3, name: "umbrella", price: 30, waterproof: true };
let gia = { id: "caranagia", name: "Gia", city: "Rome" };
//type union
let dataItems = [hat, gloves, umbrella, gia];
//type predicate function
function isPerson(testObj) {
    return testObj.city !== undefined;
    //if true type is person
}
dataItems.forEach(item => {
    if (isPerson(item)) {
        //if true log item city
        console.log(`${item.name}, ${item.city}`);
    }
    else {
        console.log(`${item.name}, ${item.price}`);
    }
});
