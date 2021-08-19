const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('trips', { 'allTrips': trips })
})

router.post('/add-trips', (req, res) => {
    const title = req.body.title
    const image = req.body.image
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate

    trips.push({ id: trips.length + 1, title: title, image: image, departureDate: departureDate, returnDate: returnDate })

    res.redirect('/trips')
})

router.post('/delete-trips', (req, res) => {
    const deletedId = parseInt(req.body.deletedId)

    trips = trips.filter((trip) => trip.id !== deletedId)

    res.redirect('/trips')
})

module.exports = router