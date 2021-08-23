const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

const pgp = require('pg-promise')()
const db = pgp('postgres://okcfflhr:v7lrxXeOlQa7uBsmJw1ZjEXRUpMgLJqJ@chunee.db.elephantsql.com/okcfflhr')

app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/', (req, res) => {

    db.any('SELECT post_id, title, body, date_created, date_updated FROM blogs').then(blogs => {
        res.render('index', { allBlogs: blogs })
    })
})

app.post('/add-blogs', (req, res) => {
    const title = req.body.title
    const bodyText = req.body.bodyText

    db.none('INSERT INTO blogs (title, body) VALUES ($1, $2)', [title, bodyText]).then(() => {
        res.redirect('/')
    })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    db.one('SELECT post_id, title, body, date_created, date_updated FROM blogs WHERE post_id = $1', [id]).then(blog => {

        res.render('blogDetails', blog)
    })
})

app.post('/delete-blogs', (req, res) => {
    const deletedId = req.body.deletedId

    db.none('DELETE FROM blogs WHERE post_id = $1;', [deletedId]).then(() => {
        res.redirect('/')
    })
})

app.post('/update-blogs', (req, res) => {
    const postId = req.body.postId
    const title = req.body.title
    const bodyText = req.body.bodyText

    console.log(postId)
    console.log(title)
    console.log(bodyText)
    db.none('UPDATE blogs SET title = $1, body = $2 WHERE post_id = $3;', [title, bodyText, postId]).then(() => {
        res.redirect('/')
    })
})

app.listen(3000, () => console.log('Server is running...'))