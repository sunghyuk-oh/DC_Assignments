// Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
function findPalindrom(word) {
    let reversed = word.split('').reverse().join('')
    if (word == reversed) {
        console.log(`The word "${word}" is palindrome.`)
    } else {
        console.log(`The word "${word}" is not palindrome.`)
    }
}

findPalindrom('mom')
console.log('----------------------------------------')


// Create an app which removes duplicates from an array
let names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
let newNames = []

for (n of names) {
    if (!newNames.includes(n)) {
        newNames.push(n)
    }
}

console.log(newNames)
console.log('----------------------------------------')


//Create an app which returns true/false depending on if the item is in the array
let items = ['pencil', 'eraser', 'marker', 'pen']

console.log(items.includes('pencil'))
console.log(items.includes('marker'))
console.log(items.includes('whiteout'))
console.log('----------------------------------------')


// Create an app which finds the largest number in an array
let numbers = [1, 21, 5, 10, 29, 15, 23]
let largest = numbers[0]

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}

console.log(`The largest number in an array is ${largest}.`)
console.log('----------------------------------------')


// Create an app which finds the smallest number in an array
let nums = [21, 2, 5, 10, 24, 15, 23]
let smallest = nums[0]

for (num of nums) {
    if (num < smallest) {
        smallest = num
    }
}

console.log(`The smallest number in an array is ${smallest}.`)
console.log('----------------------------------------')


// Create FizzBuzz app
findFizzBuzz = function(num) {
    if (num % 5 == 0 && num % 3 == 0) {
        console.log(`${num} is FizzBuzz.`)
    } else if (num % 3 == 0) {
        console.log(`${num} is Fizz.`)
    } else if (num % 5 == 0) {
        console.log(`${num} is Buzz.`)
    } else {
        console.log(`${num} is Nothing.`)
    }
}

findFizzBuzz(9)
findFizzBuzz(10)
findFizzBuzz(15)
console.log('----------------------------------------')


// Create an app which determines whether the number is even or odd.
findEvenOdd = function(number) {
    if (number % 2 == 0) {
        console.log(`${number} is the even number.`)
    } else {
        console.log(`${number} is the odd number.`)
    }
}

findEvenOdd(5)
findEvenOdd(8)
console.log('----------------------------------------')


// Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.
numArr = [3, 4, 56, 7, 8, 1]
for (i = 0; i < numArr.length; i++) {
    for (j = 0; j < numArr.length; j++) {
        if (numArr[i] < numArr[j]) {
            let tempNum = numArr[i]
            numArr[i] = numArr[j]
            numArr[j] = tempNum
        }
    }
}
console.log(`Ascending order: ${numArr}`)

numArr2 = [3, 4, 56, 7, 8, 1]
for (i = 0; i < numArr2.length; i++) {
    for (j = 0; j < numArr2.length; j++) {
        if (numArr2[i] > numArr2[j]) {
            let tempNum = numArr2[i]
            numArr2[i] = numArr2[j]
            numArr2[j] = tempNum
        }
    }
}
console.log(`Descending order: ${numArr2}`)
console.log('----------------------------------------')


// Create a class which represent a "Bank Account". The Bank Account will have the following properties.
//   - A user should be able to open a bank account provided they have the initial balance of $100
//   - User should be able to transfer money from one bank account to another  
//   - A user should be able to withdraw money from the bank account 
//   - The app should charge $35 fees if the bank account is below $0

class BankAccount {
    constructor(firstName, lastName, middleName, accountType) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountTypee = accountType
        this.balance = 0
        this.status = null
    }

    open() {
        if (this.balance >= 100) {
            this.status = "Opened"
            console.log(`Your account has been opened.`)
        } else {
            this.status = "Closed"
            console.log("Insufficient balance to open the account. Please deposit more than $100 into the account.")
        }
    }

    deposit(amt) {
        this.balance += amt

        console.log(`The amount of $${amt} deposit Successful. Balance: $${this.balance}`)
    }

    withdraw(amt) {
        if (this.balance >= amt) {
            this.balance -= amt
            console.log(`The amount of $${amt} withdrawal successful. Balance: $${this.balance}`)
        }
    }

    transfer(amt, anotherAcct) {
        if (this.balance >= amt) {
            this.balance -= amt
            anotherAcct.balance += amt
            console.log(`Transfer completed. Transferred Amount: $${amt}. Balance: $${this.balance}`)
        }
    }

    checkBalance() {
        if (this.balance <= 0) {
            this.status = "Closed"
            console.log(`You have $${this.balance} amount in the account. Penalty Charge: $35. Account Status: ${this.status}.`)
            this.balance -= 35
        }

    }
}

let acct1 = new BankAccount("John", "Doe", null, "Debit")
let acct2 = new BankAccount("John", "Doe", null, "Debit")
acct1.deposit(100)
acct1.withdraw(30)
acct1.transfer(50, acct2)

acct2.withdraw(50)
acct2.checkBalance()