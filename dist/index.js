let hat = { id: 1, name: "hat", price: 100 };
let gloves = { id: 2, name: "gloves", price: 75 };
let umbrella = { id: 3, name: "umbrella", price: 30, waterproof: true };
let gia = { id: "caranagia", name: "Gia", city: "Rome" };
//type union
let dataItems = [hat, gloves, umbrella, gia];
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`${item.name}, ${item.city}`);
    }
    else {
        console.log(`${item.name}, ${item.price}`);
    }
});
