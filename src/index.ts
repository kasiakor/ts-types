function calcTax(amount: number | null, discount: number = 10, ...extraFees: number[]) {
    if(amount !== null) {
        return (amount * 1.2) - discount + 
        extraFees.reduce((total, value) => total + value, 0);
    }
}

//with null checks enabled  Argument of type 'null' is not assignable to parameter of type 'number'.
let taxValue = calcTax(null, 0);
console.log(`Tax value for 2 args including 1 null is ${taxValue}`);

