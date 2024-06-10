// Task 1
// Bir formatInput funksiyası yazın. Bu funksiya həm string, həm də number tiplərini qəbul edə bilməli və girdiyə uyğun olaraq uyğun bir format qaytarmalıdır.

// function formatInput(value: string | number): string | number {
//     if (typeof value === 'string') {
//         return value
//     } else if (typeof value === 'number') {
//         return value * 2
//     }
// }

// console.log(formatInput(4))
// console.log(formatInput('salam'))







// Task 2
// Bir Student interfeysi yaradın. Bu interfeys, tələbənin adını, yaşını və aldığı dərslərin bir siyahısını daxil etməlidir. Daha sonra bir tələbə siyahısı yaradın və bu siyahını bir funksiyaya ötürərək tələbə məlumatlarını konsola yazdırın.

// interface IStudent {
//     name: string
//     age: number
//     listOfLesson: string[]
// }

// let students: IStudent[] = [
//     {
//         name: 'cevahir',
//         age: 19,
//         listOfLesson: ['physics', 'chemistry']
//     }
// ]

// function printToTheConsole(students: IStudent[]): void {
//     students.forEach(student => {
//         console.log(`name: ${student.name}, age: ${student.age}, listOfLesson: ${student.listOfLesson.join(',')}`)
//     })
// }

// printToTheConsole(students)





// Task 3
// Bir parsePerson funksiyası yazın. Bu funksiya bir string almalı və bu stringi ayıraraq bir tuple (cüt) olaraq geri qaytarmalıdır. Tuple, şəxsin adını və yaşını daxil etməlidir.


// function parsePerson(str: string): [string, number] {
//     let person = str.split(',')
//     const name = person[0]
//     const age = parseInt(person[1])

//     return [name, age]
// }

// console.log(parsePerson('Cevahir, 19'))





// Task 4
// Bir calculateArea funksiyası yazın. Bu funksiya bir şəkilin növünə (dairə və ya düzbucaqlı) görə sahəsini hesablamalıdır. Union types və function overloads istifadə edərək bunu həyata keçirin.





// Task 5
// Bir Person və Employee type alias-ları yaradın. Employee type alias-ı Person-dan törəməli və əlavə olaraq employeeId və department xüsusiyyətlərini daxil etməlidir. Daha sonra bir printEmployeeInfo funksiyası yazın.

// type Person = {
//     name: string
//     surname: string
// }

// type Employee = Person & {
//     employeeId: number
//     department: string
// }

// const employee: Employee = {
//     name: 'cevahir',
//     surname: 'huseynli',
//     department: 'Computer Engineer',
//     employeeId: 1
// }

// function printEmployeeInfo(employee: Employee): void {
//     console.log(`name: ${employee.name}, surname: ${employee.surname}, employeeId: ${employee.employeeId}, department: ${employee.department}`)
// }

// printEmployeeInfo(employee)





// Task 6
// Bir Car interfeysi yaradın. Bu interfeys, make, model, year və drive metodunu daxil etməlidir. Daha sonra bu interfeysi implement edən bir ElectricCar sinfi yazın.

interface ICar {
    make: string
    model: string
    year: number
    drive(): void
}

class ElectricCar implements ICar {
    make: string
    model: string
    year: number
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year
    }
    drive = (): void => {
        console.log(`${this.make}, ${this.model}, ${this.year}`)
    }
}

const myElectricCar = new ElectricCar('BMW', 'X6', 2023)
myElectricCar.drive()





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