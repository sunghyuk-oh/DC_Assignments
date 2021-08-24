const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

const pgp = require('pg-promise')()
const db = pgp('postgres://okcfflhr:v7lrxXeOlQa7uBsmJw1ZjEXRUpMgLJqJ@chunee.db.elephantsql.com/okcfflhr')

const session = require('express-session')
app.use(session({
    secret: 'SECRETKEY',
    saveUninitialized: true,
    resave: false
}))

const bcrypt = require('bcryptjs')

const authentication = require('./authentication/auth')

app.use(express.static('public'))

app.use(express.urlencoded())



// NOTES  - Display the main page (login)
app.get('/', (req, res) => {
    res.render('login')
})

// NOTES  - Display the blog page
app.get('/blogs', authentication, (req, res) => {
    db.any('SELECT post_id, title, body, date_created, date_updated FROM blogs INNER JOIN users ON blogs.user_id = users.user_id').then(blogs => {
        res.render('index', { allBlogs: blogs })
    })
})

// NOTES  - Go to blog details
app.get('/blogs/:id', authentication, (req, res) => {
    const id = req.params.id
    db.one('SELECT post_id, title, body, date_created, date_updated FROM blogs WHERE post_id = $1', [id]).then(blog => {

        res.render('blogDetails', blog)
    })
})

// NOTES  - Add a blog
app.post('/add-blogs', (req, res) => {
    const title = req.body.title
    const bodyText = req.body.bodyText

    db.none('INSERT INTO blogs (title, body, user_id) VALUES ($1, $2, $3)', [title, bodyText, req.session.user_id]).then(() => {
        res.redirect('/blogs')
    })
})

// NOTES  - Delete a blog
app.post('/delete-blogs', (req, res) => {
    const deletedId = req.body.deletedId

    db.none('DELETE FROM blogs WHERE post_id = $1;', [deletedId]).then(() => {
        res.redirect('/blogs')
    })
})

// NOTES  - Update a blog
app.post('/update-blogs', (req, res) => {
    const postId = req.body.postId
    const title = req.body.title
    const bodyText = req.body.bodyText

    db.none('UPDATE blogs SET title = $1, body = $2 WHERE post_id = $3;', [title, bodyText, postId]).then(() => {
        res.redirect('/blogs')
    })
})

// NOTES  - Leave comments
// app.get('/leave-comments', (req, res) => {

//     db.any('SELECT comment_id, body FROM comments INNER JOIN blogs On comments.post_id = blogs.post_id').then(() => {
//         res.render('blogDetails')
//     })
// })

app.post('/leave-comments', (req, res) => {
    const comment = req.body.comment
    const postId = req.body.postId

    db.any('INSERT INTO comments (body, post_id) VALUES ($1, $2)', [comment, postId])

    res.render(blogDetails)
})

// NOTES  - Register a username and password
app.get('/signup', (req, res) => {
    res.render('register')
})

app.post('/signup', (req, res) => {
    const { firstName, lastName, username, password } = req.body

    bcrypt.hash(password, 10, function(error, hash) {
        if (!error) {
            db.none(`INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)`, [firstName, lastName, username, hash])
                .then(() => {
                    res.render('login', { message: 'Sign up successful!' })
                })
        } else {
            res.render('register', { errorMessage: 'Error occurred!' })
        }
    })
})

// NOTES  - Login Authentication
app.post('/login', (req, res) => {
    const { username, password } = req.body

    db.one('SELECT user_id, username, password, first_name FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function(error, result) {
                if (result) {
                    if (req.session) {
                        req.session.user_id = user.user_id
                        req.session.username = username
                    }
                    res.redirect('/blogs')
                } else {
                    res.render('login', { errorMessage: 'Username of password is incorrect' })
                }
            })
        })
})

// NOTES  - Log out
app.get('/logout', (req, res) => {
    req.session.destroy(error => {
        req.clearCookie('connect.sid')
        req.redirect('/')
    })
})
app.post('/logout', (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => console.log('Server is running...'))