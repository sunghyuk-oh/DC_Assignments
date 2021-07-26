console.log("Hello World");

let age = 45 // Use "let" variable for now.
var name = "John" // "var" is kind of like "let" but with different scope.
const pi = 3.142 // Immutable once assign a value.


// javaScript uses camel casing
let isPublished = true


// ARRAYS
let friends = ["Alex", "Mary", "Steven"]

let tasks = []
tasks.push("Wash the car") // Add an item to an array
tasks.push("Feed the dog")
tasks.push("Clean the room")
tasks.push("Take a walk")
tasks.push("clean the desk")
tasks.push(100)

console.log(tasks)

let deletedItem = tasks.pop() // Delete an item from an array (remove the last item)
delete tasks[1] // Delete an item from an array (an item in the specific index)
tasks.splice(0, 2) // Delete an item from an array (<starting index>, <# of items to delete>)

console.log(tasks)


// LOOPS
// For loops
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index])
}

// While loops
let counter = 0
while (counter <= 10) {

    if (counter % 2 == 0) {
        break
    }
    counter += 1
}


// CONDITIONS
let version = 3
let os = "Windows"

if (version == 3) {
    console.log("Version is 3")
} else if (version == 2) {
    console.log("Version is 2")
} else {
    console.log("Some other version")
}

// And
if (version == 1 && os == 'windows') {
    console.log("Version 1")
}
// Or
if (version == 2 || os == 'windows') {
    console.log("Nope")
}


// FUNCTIONS
sayHello() // function hoisting

function sayHello() {
    console.log("Say Hello!")
}

function displayName(name) {
    console.log(name)
}

displayName("Sung Oh")

function add(a, b) {
    return a + b
}

let addition = add(4, 6)
console.log(addition)



// Activity 1 (Looping through an Array)
myFriends = ["John", "Jay", "Thomas", "Andrew"]

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i])
}


// Activity 2 (Sum of given integers)
let num1 = 30
let num2 = 45

function addNumbers(num1, num2) {
    let total = num1 + num2

    if (total >= 50 && total <= 80) {
        return 65
    } else {
        return 80
    }
}

let sum = addNumbers(num1, num2)
console.log(sum)


// Activity 3
function isVowel(letter) {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return true
    } else {
        return false
    }
}

console.log(isVowel("a"))
console.log(isVowel("c"))
console.log(isVowel("e"))