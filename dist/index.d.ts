declare function calcPrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHIC"
}
declare type comboType = [string, number | true, 1 | 2 | 3 | City.London][];
declare function getVal(input: comboType): comboType;
declare let result: comboType;
