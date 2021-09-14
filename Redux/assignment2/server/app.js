require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcryptjs')
const pgp = require('pg-promise')()
const db = pgp(process.env.DATABASE)

app.use(cors())
app.use(express.json())

app.get('/api/books', (req, res) => {
    db.any('SELECT * FROM books;')
    .then(books => {
        res.json(books)
    })
    .catch(error => {
        console.log(error)
    })
})

app.post('/api/add-book', (req,res) => {
    const {title, genre, publisher, year, imageurl} = req.body

    db.none('INSERT INTO books (title, genre, publisher, year, imageurl) VALUES ($1, $2, $3, $4, $5)', [title, genre, publisher, year, imageurl])
    .then(() => res.json({ success: true }))
    .catch(error => console.log(error))
})

app.listen(process.env.PORT, () => console.log('Server is running...'))