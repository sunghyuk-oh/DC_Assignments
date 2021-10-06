require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrpyt = require('bcryptjs')

app.use(express.json())
app.use(cors())

global.users = [
    {username: 'johndoe', password: 'password'},
    {username: 'marydoe', password: 'password'}
]

global.movies = [
    {
    Title: "Superman and Lois",
    Year: "2021",
    imdbID: "tt11192306",
    Type: "series",
    price: 5.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
    Title: "Superman II: The Richard Donner Cut",
    Year: "1980",
    imdbID: "tt0839995",
    Type: "movie",
    price: 6.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BNDhiNzNhNmMtMjhiZS00Mjc4LWE5ZmEtZjg5YTY2M2FkZmNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    Title: "Superman",
    Year: "1996–2000",
    imdbID: "tt0115378",
    Type: "series",
    price: 9.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BNDgzOWJjOTMtZjY4ZS00MGRkLTk0YTMtM2E3ZGQyYmMyYzkzXkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"
    },
    {
    Title: "The Death of Superman",
    Year: "2018",
    imdbID: "tt7167658",
    Type: "movie",
    price: 8.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BNWZkMjYzNjctYTMyZi00MjdjLTg5MzMtYjdhM2M0MTI5ZWFkXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"
    },
    {
    Title: "All-Star Superman",
    Year: "2011",
    imdbID: "tt1699114",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGM1OTc2MzUtNmMwYi00NTQwLTkzZDItNGI4NmY1ZTJkMGE3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
    Title: "Superman vs. The Elite",
    Year: "2012",
    imdbID: "tt2224455",
    Type: "movie",
    price: 7.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYzcyMjAwYzItNjc0ZS00NzViLWFkNWEtYTk0ODdlY2U0ZTJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Superman: Red Son",
    Year: "2020",
    imdbID: "tt10985510",
    Type: "movie",
    price: 10.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BMDg3NDc5YzEtOTk1My00ZTZhLTlmNjctZTJlNjYzZjE0MTI1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    },
    {
    Title: "Superman: Unbound",
    Year: "2013",
    imdbID: "tt2617456",
    Type: "movie",
    price: 9.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTkzMjczODQzMV5BMl5BanBnXkFtZTcwOTIyOTQ0OQ@@._V1_SX300.jpg"
    },
    {
    Title: "Waiting for 'Superman'",
    Year: "2010",
    imdbID: "tt1566648",
    Type: "movie",
    price: 6.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTI3ODUxODE0M15BMl5BanBnXkFtZTcwODM0NzU0Mw@@._V1_SX300.jpg"
    },
    {
    Title: "The Batman Superman Movie: World's Finest",
    Year: "1997",
    imdbID: "tt0169590",
    Type: "movie",
    price: 5.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYzk0MTI0YmUtMDgwOC00M2U5LTgzMDktM2RhN2M3ZDVmOWFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    imdbID: "tt4853102",
    Type: "movie",
    price: 8.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: The Dark Knight Returns, Part 2",
    Year: "2013",
    imdbID: "tt2166834",
    Type: "movie",
    price: 8.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Mask of the Phantasm",
    Year: "1993",
    imdbID: "tt0106364",
    Type: "movie",
    price: 4.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Year One",
    Year: "2011",
    imdbID: "tt1672723",
    Type: "movie",
    price: 6.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Assault on Arkham",
    Year: "2014",
    imdbID: "tt3139086",
    Type: "movie",
    price: 7.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: The Movie",
    Year: "1966",
    imdbID: "tt0060153",
    Type: "movie",
    price: 5.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Gotham Knight",
    Year: "2008",
    imdbID: "tt1117563",
    Type: "movie",
    price: 5.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman: Arkham City",
    Year: "2011",
    imdbID: "tt1568322",
    Type: "game",
    price: 6.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    Title: "Batman Beyond",
    Year: "1999–2001",
    imdbID: "tt0147746",
    Type: "series",
    price: 7.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"
    },
    {
    Title: "Son of Batman",
    Year: "2014",
    imdbID: "tt3139072",
    Type: "movie",
    price: 8.99,
    Poster: "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    }
]

app.get('/view-movies', (req, res) => {
    res.json(movies)
})

app.post('/register', (req, res) => {
    const { firstName, lastName, username, password } = req.body

    let salt = bcrpyt.genSaltSync(10)
    let hash = bcrpyt.hashSync(password, salt)

    const foundUser = users.find(user => user.username == username)

    if(!foundUser) {
        users.push({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: hash
        })
        
        res.json({success: true, message: 'Register Successful! Please Log in.'})
    } else {
        res.json({message: 'Username already existed. Please try different username.'})    
    }
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    const foundUser = users.find(user => user.username == username)

    if (foundUser) {
        bcrpyt.compare(password, foundUser.password, function(err, result) {
            if (result) {
                const token = jwt.sign({ username: username }, `${process.env.JWT_SECRET_KEY}`)
                
                res.json({success: true, token: token})
            } else {
                res.json({success: false, message: 'Invalid Password'})
            }
        })
    } else {
        res.json({success: false, message: 'User Not Found'})
    }
})

app.listen(process.env.PORT, () => console.log('Server is running...'))