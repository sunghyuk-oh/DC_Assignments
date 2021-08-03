// DESCRIPTION
// You are the owner of a coffee shop and you want to manage the orders you receive from the customers.
// Create an app which list all the coffee orders on a web page. You can also type in the email address in a textbox and search for a particular coffee order by email address. You should also be able to delete the coffee order. You should also be able to add a new coffee order.

// Coffee Order Web API Documentation
//  Get all orders & Create new order:
//  https://troubled-peaceful-hell.glitch.me/orders
//  Get order by email:
//  https://troubled-peaceful-hell.glitch.me/orders/johndoe@gmail.com
//  Delete order by email:
//  https://troubled-peaceful-hell.glitch.me/orders/johndoe@gmail.com


const emailTextBox = document.getElementById("emailTextBox")
const typeTextBox = document.getElementById("typeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const orderButton = document.getElementById("orderButton")
const emailTextBox2 = document.getElementById("emailTextBox2")
const findButton = document.getElementById("findButton")
const emailTextBox3 = document.getElementById("emailTextBox3")
const deleteButton = document.getElementById("deleteButton")
const coffeeUL = document.getElementById("coffeeUL")
const orderURL = "https://troubled-peaceful-hell.glitch.me/orders"

// NOTES - Get the orders from the API file
function getOrders(orderDisplay, url) {
    const orderResult = new XMLHttpRequest()
    orderResult.open("GET", url)
    orderResult.send()

    orderResult.addEventListener("load", function() {
        const coffeeOrders = JSON.parse(this.responseText)
        console.log(coffeeOrders)
        orderDisplay(coffeeOrders)
    })
}

// NOTES - Display the order on the browser
function displayOrders(coffee) {
    const coffeeItems = coffee.map(function(item) {
        return `<li>
                    <h5>Email: ${item.email}</h5>
                    <h5>Coffee Type: ${item.type}</h5>
                    <h5>Coffee Size: ${item.size}</h5>
                    <h5>Price: $${item.price}</h5>
                </li>`
    })
    coffeeUL.innerHTML = coffeeItems.join("")
}

getOrders(function(coffee) { displayOrders(coffee) }, orderURL)



// NOTES - Create the order
orderButton.addEventListener("click", function(event) {
    // event.preventDefault()
    const email = emailTextBox.value
    const type = typeTextBox.value
    const size = sizeTextBox.value
    const price = Math.floor(Math.random() * (3.99 - 6.99 + 1) + 3.99)

    const request = new XMLHttpRequest()
    request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    request.setRequestHeader("Content-Type", "application/json")

    const orderItem = {
        email: email,
        type: type,
        size: size,
        price: price
    }

    request.send(JSON.stringify(orderItem))

    // Add the new order item into the UL element
    request.addEventListener("load", function() {
        const item = JSON.parse(this.responseText)
        const addItem = `<li>
                            <h5>Email: ${item.email}</h5>
                            <h5>Coffee Type: ${item.type}</h5>
                            <h5>Coffee Size: ${item.size}</h5>
                            <h5>Price: $${item.price}</h5>
                        </li>`
        coffeeUL.insertAdjacentHTML("beforeend", addItem)
    })
})


// NOTES - Find the order by email address
function displaySortedOrders(item) {
    sortedItem = `<li>
                    <h5>Email: ${item.email}</h5>
                    <h5>Coffee Type: ${item.type}</h5>
                    <h5>Coffee Size: ${item.size}</h5>
                    <h5>Price: $${item.price}</h5>
                  </li>`

    coffeeUL.innerHTML = sortedItem
}

findButton.addEventListener("click", function(event) {
    event.preventDefault() // Because I am using the <form> tag
    const emailAdd = emailTextBox2.value
    const sortedURL = `https://troubled-peaceful-hell.glitch.me/orders/${emailAdd}`

    getOrders(function(coffee) {
        displaySortedOrders(coffee)
    }, sortedURL)
})


// NOTES - Delete the order by email address
deleteButton.addEventListener("click", function(e) {
    e.preventDefault()
    const email = emailTextBox3.value
    deleteResult = new XMLHttpRequest()

    deleteResult.open("DELETE", `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    deleteResult.send()

    deleteResult.addEventListener("load", function() {
        const items = JSON.parse(this.responseText)
        console.log(items)
        const coffeeItems = items.map(function(item) {
            return `<li>
                        <p>${item.email}</p>
                        <p>${item.type}</p>
                        <p>${item.size}</p>
                        <p>${item.price}</p>
                    </li>`
        })
        coffeeUL.innerHTML = coffeeItems.join("")
    })
})