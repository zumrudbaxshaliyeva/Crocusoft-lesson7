// Task 1
// Bir formatInput funksiyası yazın. Bu funksiya həm string, həm də number tiplərini qəbul edə bilməli və girdiyə uyğun olaraq uyğun bir format qaytarmalıdır.
var ElectricCar = /** @class */ (function () {
    function ElectricCar(make, model, year) {
        var _this = this;
        this.drive = function () {
            console.log("".concat(_this.make, ", ").concat(_this.model, ", ").concat(_this.year));
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return ElectricCar;
}());
var myElectricCar = new ElectricCar('BMW', 'X6', 2023);
myElectricCar.drive();
// Task 7
// Bir Product type alias-ı yaradın və bu tipdə bir məhsul siyahısı təyin edin. Daha sonra, məhsul siyahısındakı ümumi qiyməti hesablayan bir funksiya yazın.
// type Product = {
//     name: string
//     price: number
// }
// let products: Product[] = [{
//     name: 'S23',
//     price: 1300
// }, {
//     name: 'Iphone 15',
//     price: 3000
// }]
// function calculateTotalPrice(products: Product[]):number {
//     let totalPrice = 0
//     for (const product of products) {
//         totalPrice+= product.price
//     }
//     return totalPrice
// }
// console.log(calculateTotalPrice(products), 'AZN')
