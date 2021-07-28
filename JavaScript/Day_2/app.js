const taskTitle = document.getElementById("taskTitle")
const addButton = document.getElementById("addButton")
const boxContainer = document.getElementById("box-container")
const boxContainer2 = document.getElementById("box-container2")

// Trigger the Add button
addButton.addEventListener("click", function() {
    const task = taskTitle.value
    if (task.length == 0) {
        alert("The text box is empty. Please enter the task title.")
    } else {
        // create child div
        const taskDiv = document.createElement("div")
        taskDiv.setAttribute("class", "box")

        // create "input" and assign attribute (type / "checkbox")
        const taskInput = document.createElement("input")
        taskInput.setAttribute("type", "checkbox") // Can use "input.type = 'checkbox'" instead.

        // create "label" and assign attribute (class) & and add task title into the label
        const taskLabel = document.createElement("label")
        taskLabel.setAttribute("class", "taskTitle")
        taskLabel.innerHTML = task

        // create "button" and add text inside the button tag
        const taskRemoveButton = document.createElement("button")
        taskRemoveButton.innerHTML = "Remove"


        // Add input,label,button into child div
        taskDiv.appendChild(taskInput)
        taskDiv.appendChild(taskLabel)
        taskDiv.appendChild(taskRemoveButton)

        // add child div into parent div
        boxContainer.appendChild(taskDiv)


        // triggering the remove button
        taskRemoveButton.addEventListener("click", function() {
            this.parentElement.parentElement.removeChild(this.parentElement)
                // Or, this.parentElement.remove()
        })


        // triggering the checkbox
        taskInput.addEventListener("change", function() {
            if (this.checked) {
                // boxContainer.removeChild(taskDiv)
                boxContainer2.appendChild(taskDiv)
            } else {
                // boxContainer2.removeChild(taskDiv)
                boxContainer.appendChild(taskDiv)
            }
        })
    }
})