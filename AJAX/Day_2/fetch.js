const emailTextBox = document.getElementById("emailTextBox")
const sizeTextBox = document.getElementById('sizeTextBox')
const orderButton = document.getElementById('orderButton')
const emailTextBox2 = document.getElementById('emailTextBox2')
const findButton = document.getElementById('findButton')
const deleteButton = document.getElementById('deleteButton')
const coffeeUL = document.getElementById('coffeeUL')

const ORDER_URL = 'https://troubled-peaceful-hell.glitch.me/orders'

// NOTES Display the order found by Email
function displaySearchOrders(orders) {
    const foundOrder = `<li>${orders.email} | ${orders.type} | ${orders.size} | $${orders.price}</li>`
    coffeeUL.innerHTML = foundOrder
}

// NOTES Find the order by Email
function searchOrders() {
    const findEmail = emailTextBox2.value
    const FIND_ORDER_URL = `https://troubled-peaceful-hell.glitch.me/orders/${findEmail}`

    fetchOrders(function(orders) {
        displaySearchOrders(orders)
    }, FIND_ORDER_URL)
}

// NOTES Display all orders after adding or deleting order item
function populateAllOrders() {
    fetchOrders(function(orders) {
        displayOrders(orders)
    }, ORDER_URL)
}

// NOTES Delete the order by Email
function deleteOrders() {
    const emailAddress = emailTextBox2.value
    const DELETE_ORDER_URL = `https://troubled-peaceful-hell.glitch.me/orders/${emailAddress}`
    fetch(DELETE_ORDER_URL, {
        method: 'DELETE'
    }).then(response => {
        return response.json()
    }).then(result => {
        console.log(result.message)
        if (result.message) {
            populateAllOrders()
        }
    })
}

// NOTES Add the order
function addOrders(order) {
    fetch(ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    }).then(response => {
        return response.json()
    }).then(result => {
        console.log(result.message)
        if (result.success) {
            populateAllOrders()
        }
    })
}

// NOTES display all orders
function displayOrders(orders) {
    const orderItems = orders.map((item) => {
        return `<li>${item.email} | ${item.type} | ${item.size} | $${item.price}</li>`
    })

    coffeeUL.innerHTML = orderItems.join("")
}

// NOTES Fetch all orders from the API file
function fetchOrders(ordersDisplay, url) {
    fetch(url)
        .then(function(request) {
            return request.json()
        })
        .then(result => {
            ordersDisplay(result)
        })
        .catch(error => {
            console.log(error)
        })
}

// NOTES Call the fetchOrder function
fetchOrders(function(orders) {
    displayOrders(orders)
}, ORDER_URL)


// NOTES Buttons EventHandlers
orderButton.addEventListener('click', function() {
    const order = {
        email: emailTextBox.value,
        type: typeTextBox.value,
        size: sizeTextBox.value,
        price: 4.99
    }
    addOrders(order)
})

findButton.addEventListener("click", function() {
    searchOrders()
})

deleteButton.addEventListener('click', function() {
    deleteOrders()
})