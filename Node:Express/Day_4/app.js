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