// Set up Express
const express = require('express')
const app = express()

// Set up Mustache (template engine)
const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// Set up urlencoded for POST
app.use(express.urlencoded())

// Set up Router (trips.js)
const moviesRouter = require('./routes/movies')
app.use('/movies', moviesRouter)

// Set up Static resourse
app.use(express.static('public'))

global.movies = []

app.listen(3000, () => console.log('Server is running...'))