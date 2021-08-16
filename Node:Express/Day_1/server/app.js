let tasks = []

const express = require('express')
const app = express()

app.use(express.json())

const cors = require('cors')
app.use(cors())

app.get('/todo', (req, res) => {
    res.send(tasks)
})

app.post('/todo', (req, res) => {
    const id = tasks.length + 1
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date

    tasks.push({ "id": id, "title": title, "priority": priority, "date": date })

    res.json({ success: true, message: "New task has been added" })

})

app.delete('/todo/:id', (req, res) => {
    const deletedId = req.params.id

    const itemIndex = tasks.findIndex((item) => {
        console.log(item.id)
        console.log(deletedId)
        item.id === deletedId
    });
    console.log(itemIndex)
    if (itemIndex >= 0) {
        tasks.splice(itemIndex - 1, 1);
    }
    // tasks = tasks.filter((item) => item.id !== deletedId);

    res.json({ success: true, message: "The task has been deleted" })
})

app.listen('3000', () => {
    console.log('server is running...')
})