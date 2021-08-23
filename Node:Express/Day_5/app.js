const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
const authentication = require('./authentication/auth_middleware')

const session = require('express-session')
app.use(session({
    secret: "SECRETKEY",
    saveUninitialized: false,
    resave: true
}))

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const tripRouter = require('./routes/trips')
app.use('/trips', authentication, tripRouter)

const { v4: uuidv4 } = require('uuid');


global.users = []
global.trips = []

app.listen(3000, () => console.log('Server is running...'))