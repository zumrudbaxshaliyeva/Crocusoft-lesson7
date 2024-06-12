//* Task1
/*type functionType = number | string;

function formatInput(value: functionType): functionType {
    return value;
}
console.log(formatInput(5))
console.log(formatInput('string'))*/

//*Task2

/*interface IStudent {
    name: string,
    age: number,
    lesson: string
}

function getStudent(arr: IStudent[]): {} {
    return arr;
}

let studentsList: IStudent[] = [
    {
        name: 'Chris',
        age: 16,
        lesson: 'Physics'
    },
    {
        name: 'Taylor',
        age: 15,
        lesson: 'Mathematics'
    },
    {
        name: 'Mike',
        age: 17,
        lesson: 'Literature'
    }
]

console.log(getStudent(studentsList))*/

//*Task3

/*interface IPersons {
    name: string,
    age: number
}

let persons: IPersons[] = [
    {
        name: 'Jack',
        age: 25
    }
]

type tupleType = [string, number]

function parsePerson(value: string): tupleType {
    let parts = value.split(" ")

    if (parts.length !== 2) {
        throw new Error('Input is not correct')
    }

    let name = parts[0]
    let age = parseInt(parts[1])
    if (isNaN(age)) {
        throw new Error('Age is not number!')
    }

    return [name, age]
}

console.log(parsePerson('Swift 255 sad'))*/


//* Task4
/*type fig = 'square' | 'circle'

function calculateAre(figure: fig, ...params: number[]): number | undefined {
    if (figure === "square") {
        const [side] = params;
        console.log(params)
        return Math.pow(side, 2)
    }
    else if (figure === 'circle') {
        const [radius] = params
        console.log(params)
        return (Math.PI * Math.pow(radius, 2)) / 2
    }
}

console.log(calculateAre('circle', 5))*/

//* Task5

/*type TPerson = {
    name: string,
    age: number,
    country: string
}

type TEmployee = TPerson & {
    employeeId: number
}


let employeeList: TEmployee[] = [
    {
        name: 'Elvin',
        age: 23,
        country: 'Azerbaijan',
        employeeId: 1
    },
    {
        name: 'Paul',
        age: 25,
        country: 'USA',
        employeeId: 2
    },
    {
        name: 'Andrey',
        age: 24,
        country: 'Russian',
        employeeId: 3
    }
]

function getEmployee(employeeName: string): {} | undefined {
    return employeeList.find(arr => arr.name === employeeName)
}

console.log(getEmployee('Paul'))*/

//* Task 6
/*
interface ICar {
    mark: string
    model: string
    year: number
    drive(): void
}

class ElectricCar implements ICar {
    mark: string
    model: string
    year: number

    constructor(mark: string, model: string, year: number) {
        this.mark = mark
        this.model = model,
            this.year = year
    }

    drive() {
        console.log(`${this.model} of ${this.mark} is producted in ${this.year}`)
    }
}

const myCar = new ElectricCar('Audi', 'E-Tron', 2015)

myCar.drive()*/

//*Task7
/*
type TProduct = {
    type: string
    model: string
    costs: number
}

let products: TProduct[] = [
    {
        type: 'Keyboard',
        model: 'Razor',
        costs: 60
    },
    {
        type: 'Mouse',
        model: 'Logitech',
        costs: 10
    },
    {
        type: 'Hard Disk Drive',
        model: 'Western Digital',
        costs: 400
    }
]

function totalSum(): number {
    return (
        products.reduce((acc, cur) => {
            return acc += cur.costs
        }, 0)
    )

}

console.log(totalSum()) */

