let hat = { id: 1, name: "hat", price: 100 };
let gloves = { id: 2, name: "gloves", price: 75 };
let umbrella = { id: 3, name: "umbrella", price: 30, waterproof: true };
let gia = { id: "caranagia", name: "Gia", city: "Rome" };
//type union
let dataItems = [hat, gloves, umbrella, gia];
//do not test this way for optional property as object can still match the shape of product
//Property 'city' does not exist on type 'Product | Person'.
//Property 'city' does not exist on type 'Product'
dataItems.forEach(item => {
    if ("price" in item) {
        console.log(`${item.name}, ${item.price}`);
    }
    else {
        console.log(`${item.name}, ${item.city}`);
    }
});
