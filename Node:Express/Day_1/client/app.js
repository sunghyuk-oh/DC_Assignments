const userInputForm = document.getElementById("userInputForm")
const titleTextbox = document.getElementById("titleTextbox")
const priorTextbox = document.getElementById("priorTextbox")
const dateTextbox = document.getElementById("dateTextbox")
const toDoUL = document.getElementById("toDoUL")

userInputForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titleTextbox.value,
                priority: priorTextbox.value,
                date: dateTextbox.value
            })
        }).then(response => response.json())
        .then(result => {
            displayTask()
        })
})

function displayTask() {
    fetch("http://localhost:3000/todo")
        .then(response => response.json())
        .then(todo => {
            const todoItems = todo.map((item) => {
                return `
                <li>${item.id}. ${item.title} - ${item.priority} - ${item.date} <button onclick="removeTask(${item.id})">Remove</button></li>`
            })
            toDoUL.innerHTML = todoItems.join("")
        })
}

function removeTask(id) {
    fetch(`http://localhost:3000/todo/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(result => {
            displayTask()
        })
}

displayTask()