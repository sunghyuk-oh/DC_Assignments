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

app.post('/api/add-cart', (req, res) => {
    const { bookId } = req.body

    db.none('INSERT INTO carts (book_id) VALUES ($1)', [bookId])
    .then(() => res.json({success: true}))
    .catch(error => console.log(error))
})

app.get('/api/view-cart', (req, res) => {
    db.any('SELECT books.title, books.genre, books.imageurl, carts.cart_id FROM carts INNER JOIN books ON carts.book_id = books.book_id')
    .then(books => res.json(books))
    .catch(error => console.log(error))
})

app.delete('/api/delete-cart-item', (req, res) => {
    const {cartId} = req.body

    db.none('DELETE FROM carts WHERE cart_id = $1', [cartId])
    .then(res.json({ success: true }))
    .catch(error => console.log(error))
})

app.listen(process.env.PORT, () => console.log('Server is running...'))