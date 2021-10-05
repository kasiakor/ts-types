let hat = { name: "Hat", price: 100 };
let gloves = { name: "gloves", price: 75 };
//property 'price' does not exist on type '{ name: string; }'
//declaration changed to common properties let products: {name: string;}[];
let umbrella = { name: "umbrella" };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}, ${prod.price}`));
