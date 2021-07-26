// There are NO classes in JavaScript


function Car(make, model) { // work as Class
    this.make = make
    this.model = model
    this.vin = ''
}

function drive() {
    console.log("Car is driving")
}

function brake() {
    console.log("Brake")
}


let car = new Car('Honda', 'Accord') // Assiging instance of Class

car.noOfCylinders = 2 // dynamically adding another property

console.log(car)

Car.prototype.driveTheCar = drive // add the object (function) to the Car class / 'prototype' is used for adding a function
Car.prototype.brakeTheCar = brake

Car.prototype.changeGear = function() { // adding a function using an anonymous function
    console.log('Changing Gear')
}

car.driveTheCar() // calling the "driveTheCar" function in the class
car.brakeTheCar()
car.changeGear()


// Creating a new instanceo of Car object
let anotherCar = new Car('Toyota', 'Camry')
anotherCar.driveTheCar() // properties attached using 'prototypes' will be available in all new Car objects

anotherCar.fillUpCar = function() { // this will not appear on another new instance of Car object b/c it didn't use 'prototype'
    console.log("filling up gas")
}


// Accessing properties of anotherCar
console.log(anotherCar.model)
console.log(anotherCar.make)



// MODERN CLASS SYNTAX
class ElectricCar {
    constructor(make, model, range) {
        this.make = make
        this.model = model
        this.range = range
        this.speed = 0
    }

    drive() {
        this.speed += 10
    }

    brake() {
        this.speed -= 10
    }
}

let electricCar = new ElectricCar('Tesla', 'Model X', 300)
electricCar.drive()
electricCar.brake()




// ACTIVITY 3 (Bank Account Class) 
// function type class method
function Bank_(accountType) {
    this.accountType = accountType
    this.balance = 0
}

Bank_.prototype.deposit = function(amt) {
    this.balance += amt
}

Bank_.prototype.withdraw = function(amt) {
    this.balance -= amt
}

bank_ = new Bank_('Debit')
bank_.deposit(100)
bank_.withdraw(50)

console.log(bank_.balance)

// modern class syntax
class Bank {
    constructor(accountType) {
        this.accountType = accountType
        this.balance = 0
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

bank = new Bank('Debit')
bank.deposit(100)
bank.withdraw(50)

console.log(bank.balance)