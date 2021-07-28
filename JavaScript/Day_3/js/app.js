const allMenuBtn = document.getElementById("allMenuBtn")
const startersBtn = document.getElementById("startersBtn")
const entreesBtn = document.getElementById("entreesBtn")
const dessertsBtn = document.getElementById("dessertsBtn")
const menuItem = document.getElementById("menuItem")

// Display All Menu
const allMenu = dishes.map(function(dish) {
    return `
        <div id="dish">
            <img src='${dish.imageURL}' />
            <div id="description">
                <h3>${dish.title}</h3>
                <p>${dish.description}</p>
            </div>
            <p>$${dish.price}</p>
        </div>
    `
})

menuItem.innerHTML = allMenu.join("")


// Filter Starter dishes
const starterItems = dishes.filter(function(dish) {
    if (dish.course == "Starters") {
        return dish
    }
})

// Filter Entree dishes
const entreeItems = dishes.filter((dish) => {
    if (dish.course == "Entrees") {
        return dish
    }
})

// Filter Dessert dishes
const dessertItems = dishes.filter(function(dish) {
    if (dish.course == "Desserts") {
        return dish
    }
})


// Trigger the allMenu button
allMenuBtn.addEventListener("click", function() {
    const allMenu = dishes.map(function(dish) {
        return `
            <div id="dish">
                <img src='${dish.imageURL}' />
                <div id="description">
                    <h3>${dish.title}</h3>
                    <p>${dish.description}</p>
                </div>
                <p>$${dish.price}</p>
            </div>
        `
    })

    menuItem.innerHTML = allMenu.join("")
})


// Trigger the starters button
startersBtn.addEventListener("click", function() {
    const starters = starterItems.map((item) => {
        return `
        <div id="dish">
            <img src='${item.imageURL}' />
            <div id="description">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <p>$${item.price}</p>
        </div>
            `
    })

    menuItem.innerHTML = starters.join("")
})


// Trigger the entrees button
entreesBtn.addEventListener("click", function() {
    const entrees = entreeItems.map((item) => {
        return `
            <div id="dish">
                <img src='${item.imageURL}' />
                <div id="description">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <p>$${item.price}</p>
            </div>
        `
    })

    menuItem.innerHTML = entrees.join("")
})


// Trigger the desserts button
dessertsBtn.addEventListener("click", function() {
    const desserts = dessertItems.map(function(item) {
        return `
        <div id="dish">
            <img src='${item.imageURL}' />
            <div id="description">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <p>$${item.price}</p>
        </div>
        `
    })

    menuItem.innerHTML = desserts.join("")
})