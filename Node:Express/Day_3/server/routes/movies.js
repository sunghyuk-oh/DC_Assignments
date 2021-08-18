const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('movies', { movieLists: movies })
})

// Add the movie
router.post('/create', (req, res) => {
    const movieTitle = req.body.movieTitle
    const movieDescription = req.body.movieDescription
    const movieGenre = req.body.movieGenre
    const moviePosterUrl = req.body.moviePosterUrl

    let movie = {
        movieId: movies.length + 1,
        movieTitle: movieTitle,
        movieDescription: movieDescription,
        movieGenre: movieGenre,
        moviePosterUrl: moviePosterUrl
    }
    movies.push(movie)

    res.redirect('/movies')
})

// Delete the movie
router.post('/delete', (req, res) => {
    const deletedMovieId = parseInt(req.body.deletedMovieId)

    movies = movies.filter((movie) => {
        return movie.movieId !== deletedMovieId
    })
    res.redirect('/movies')
})


router.get('/:movieId', (req, res) => {
    let movieId = parseInt(req.params.movieId)
    console.log(movieId)
    let oneMovie = movies.find((movie) => {
        return movie.movieId == movieId
    })
    console.log(oneMovie)
    res.render('movieDetails', oneMovie)
})

module.exports = router