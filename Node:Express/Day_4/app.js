// Set up Express
const express = require('express')
const app = express()

// Set up Mustache
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

// Set up Router
const tripRouter = require('./routes/trips')
app.use('/trips', tripRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)

// Set up Session
const session = require('express-session')
app.use(session({
    secret: 'SECRETKEY',
    saveUninitialized: true,
    resave: true
}))

global.trips = []
global.users = []

app.listen(3000, () => console.log('Server is running...'))


/*
const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const tripsRouter = require('./routes/trips')

const authenticate = require('./authentication/authenticateMiddleware')

const app = express()

let users = [
    {username: 'johndoe', password: 'password'}, 
    {username: 'marydoe', password: 'password'}
]

// middleware 
app.use(express.urlencoded())
// middleware 
app.use(express.static('public'))

// middleware for session 
app.use(session({
    secret: 'THISISSECRETKEY', 
    saveUninitialized: false, 
    resave: true 
}))

function authenticate(req, res, next) {

    console.log('AUTHENTICATE MIDDLEWARE')
    if(req.session) {
        if(req.session.username) {
           next() // perform the original request 
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}

app.use('/trips', authenticate,  tripsRouter)

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.get('/login', (req, res) => {
    res.render('login')
})

// /trips
// /trips/add-trip 
// /trips/delete-trip

 moved to trips.js 
app.get('/trips',authenticate, (req, res) => {
    res.render('trips')
}) 

 moved to trips.js 
app.get('/add-trip',authenticate, (req, res) => {
    res.render('add-trip')
}) 

app.post('/login', (req, res) => {
    
    const username = req.body.username
    const password = req.body.password 

    const persistedUser = users.find(user => {
        return user.username == username && user.password == password
    })

    if(persistedUser) { 
        // if the user is in the array and username and password is matching 
        if(req.session) {
            req.session.username = persistedUser.username 
        }

        res.redirect('/trips')

    } else {
        res.render('login', {errorMessage: 'Username or password is incorrect!'})
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(error => {
        res.clearCookie('connect.sid')
        res.redirect('/login')
    })
})


app.listen(3000,() => {
    console.log('Server is running...')
})
*/