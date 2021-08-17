const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

let trips = []

// NOTES  - Display trips
app.get('/trips', (req, res) => {
    res.render('trips', { allTrips: trips })
})

// NOTES  - Adding trips
app.get('/add-trips', (req, res) => {
    res.render('add-trips')
})
app.post('/add-trips', (req, res) => {
    const title = req.body.title
    const image = req.body.image
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate

    trips.push({ id: trips.length + 1, title: title, image: image, departureDate: departureDate, returnDate: returnDate })

    res.redirect('/trips')
})

// NOTES  - Deleting trips
app.post('/delete-trips', (req, res) => {
    const deletedTrip = parseInt(req.body.deletedTrip)

    trips = trips.filter((trip) => {
        return trip.id !== deletedTrip
    })

    res.redirect('/trips')
})


app.listen(3000, () => {
    console.log('Server is running...')
})