require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const bcryt = require('bcryptjs')
const cors = require('cors')
const pgp = require('pg-promise')()

const db = pgp(process.env.DATABASE)

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}))
app.use(cors())
app.use(express.json())

app.get('/books', (req, res) => {
    db.any('SELECT title, genre, publisher, year, imageURL FROM books;')
    .then((books) => {
        res.json(books)
    }).catch(err => {
        console.log(err)
    })
})

app.post('/add-book', (req, res) => {
    const {title, genre, publisher, year, imageURL} = req.body

    db.none('INSERT INTO books (title, genre, publisher, year, imageURL) VALUES ($1, $2, $3, $4, $5)', [title, genre, publisher, year, imageURL])
    .then(() => res.json({ success: true }))
        .catch(err => {
        console.log(err)
    })
})

app.delete('/delete-book', (req, res) => {
    const {title} = req.body

    db.none('DELETE FROM books WHERE title = $1', [title])
    .then(() => res.json({ success: true }))
})

app.listen(process.env.PORT, () => console.log('Server is running...'))