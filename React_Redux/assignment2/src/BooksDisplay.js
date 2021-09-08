import { Component } from "react/cjs/react.production.min";
import './BooksDisplay.css'

class BooksDisplay extends Component {
 
    render() {
        const bookItems = this.props.books.map((book, index) => {
            const imageLink = `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`
            
            return (
                <div className="eachBook" key={index}>
                    <img src={imageLink} />
                    <h2>{book.title}</h2>
                    <p><b>Author:</b> {book.author}</p>
                    <p><b>Year:</b> {book.year}</p>
                    <p><b>Language:</b> {book.language}</p>
                    <a href={book.link}>Click Here for Details</a>
                </div>
            )
        })
        return (
            <section className="bookDisplay">{bookItems}</section>
        )
    }
}

export default BooksDisplay