function calcTax(amount: number, discount: number = 10, ...extraFees: number[]): number {
        return (amount * 1.2) - discount + 
        extraFees.reduce((total, value) => total + value, 0);

}

function writeValue(label: string, value: number): void {
    console.log(`label: ${label}, value: ${value}`);
}


writeValue("Tax value is ", calcTax(60, 0));


