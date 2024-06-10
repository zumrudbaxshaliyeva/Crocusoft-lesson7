
/// Task 1

// function formatInput(value : number | string): number|string{
//     return value;
// }

// console.log(formatInput(5));
// console.log(formatInput("36"))

/// Task 2

// interface IStudent {
//     name: string,
//     age: number,
//     lessons: ILessons
// }

// interface ILessons {
//     les1: string,
//     les2: string,
//     les3: string
// }

// function students(arr:IStudent[]):void{
//     arr.forEach(student => console.log(student));
// }

// const studentsArr : IStudent[]=[{
//     name: "Jane",
//     age: 17,
//     lessons: {
//         les1: 'Math',
//         les2: 'History',
//         les3: 'Physics'
//     }
// },
// {
//     name: "Mary",
//     age: 22,
//     lessons: {
//         les1: 'Informatics',
//         les2: 'History',
//         les3: 'Physics'
//     }
// },
// {
//     name: "Arya",
//     age: 21,
//     lessons: {
//         les1: 'Geography',
//         les2: 'Math',
//         les3: 'Physics'
//     }
// }]

// students(studentsArr);

/// Task 3

// function parsePerson(value: string):[string, number]{
//     const info = value.split(/([0-9]+)/);
//     return [info[0], parseInt(info[1])]
    
// }

// console.log(parsePerson("Ali63"));
// console.log(parsePerson("Suzan25"));
// console.log(parsePerson("Leman6"));

/// Task 4

// type figures = "rectangle" | "square"

// function calculateArea(figure: figures, side: number[]){
//     if(figure === "rectangle"){
//         const area = side.reduce((acc, cur) => {
//             return acc*cur;
//         }, 1);
//         return area;
//     }else if(figure === "square"){
//         const area = side[0]*side[0]
//         return area;
//     }
// }

// console.log(calculateArea("square", [12]));
// console.log(calculateArea("rectangle", [7,8]));

/// Task 5

// type TPerson = {
//     name: string,
//     surname: string,
//     age: number,
//     isMarried: boolean
// }

// type TEmployee = TPerson & {
//     employeeId: number,
//     department: string
// }

// function printEmployeeInfo<T>(obj:T):void{
//     console.log(obj)
// }

// const employee:TEmployee={
//     name: "Kamal",
//     surname: "Abdulla",
//     age : 29,
//     department: "IT",
//     isMarried: true,
//     employeeId: 65897
// }

// printEmployeeInfo(employee);

/// Task6

// interface Car{
//     make: string,
//     year: number,
//     drive: (year: number) => string,
//     model: string
// }


// class ElectricCar implements Car {
//     make: string;
//     model: string;
//     year: number;
//     constructor(make:string, model: string, year: number ){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     drive = (year: number):string => {
//         return `${this.model} model is made by ${this.make} in ${year}`
//     }
// }

// const newCar = new ElectricCar("Audi", "V18", 2012);
// console.log(newCar.drive(2012));

/// Task7

// type TProduct = {
//     product: string,
//     price: number
// }

// const ProductList : TProduct[] =[
//     {product: "dress", price: 25},
//     {product: "T-Shirt", price: 15},
//     {product: "trousers", price: 38},
//     {product: "glass", price: 12},
//     {product: "shoes", price: 27}
// ] 

// function TotalPrice(products: TProduct[]):number{
//     const totalprice = products.reduce((acc, cur) => {
//         return acc+=cur.price
//     },0)
//     return totalprice;
// }

// console.log(TotalPrice(ProductList));