const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let books = [ 
    {title: "Things Fall Apart",
     genre: 'Historical Fiction',
     publisher: 'William Heinemann Ltd',
     year: 1958,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/things-fall-apart.jpg'
    },
    {title: "Molloy, Malone Dies, The Unnamable, the trilogy",
     genre: 'Novel',
     publisher: 'Les Éditions de Minuit',
     year: 1951,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/molloy-malone-dies-the-unnamable.jpg'
    },
    {title: "Ficciones",
     genre: 'Fiction',
     publisher: 'Editorial Sur',
     year: 1944,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/ficciones.jpg'
    },
    {title: "Journey to the End of the Night",
     genre: 'Novel',
     publisher: 'New Directions',
     year: 1932,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/voyage-au-bout-de-la-nuit.jpg'
    },
    {title: "Nostromo",
     genre: 'Novel',
     publisher: 'Harper & Bros',
     year: 1904,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/nostromo.jpg'
    },
    {title: "Berlin Alexanderplatz",
     genre: 'Novel',
     publisher: 'S. Fischer Verlag, Berlin',
     year: 1929,
     imageURL: 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/berlin-alexanderplatz.jpg'
    }
]

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.post('/api/books', (req, res) => {
    const {title, genre, publisher, year, imageURL} = req.body

    const book = {
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    }

    books.push(book)

    res.json({success: true})
})

app.delete('/api/delete-book', (req,res) => {
    const {title} = req.body

    books = books.filter(book => {
        return book.title !== title
    })

    res.json({success: true})
})

app.listen(8080, () => console.log('Server is running...'))