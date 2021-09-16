import './css/App.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import * as actionCreator from '../stores/creators/actionCreate'

function DisplayBook(props) {
  // Fetching the books from the database
  useEffect(() => {
    fetch('http://localhost:8080/api/books')
    .then(response => response.json())
    .then(books => {
      props.onFetchBooks(books)
    })
  }, [])


  // Add the books to the cart
  const handleAddCart = (bookIdentifier) => {
    props.onAddCart()

    console.log(bookIdentifier)
    fetch('http://localhost:8080/api/add-cart', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "bookId": bookIdentifier })
    })
    .then(response => response.json())
    .then((result) => {
        if (result.success) {
            console.log('the book has been added to the cart')
        }
    })
  }

  const books = props.allBooks.map(book => {
    return <div key={book.book_id} className="eachBook">
              <img className="bookImg" src={book.imageurl} />
              <h3>{book.title}</h3>
              <p><b>Genre: </b>{book.genre}</p>
              <p><b>Year: </b>{book.year}</p>
              <p><b>Publisher: </b>{book.publisher}</p>
              <button onClick={() => handleAddCart(book.book_id)} >Add to cart</button>
            </div>
  })

  return (
    <main className="">
      <h1>Books</h1>
      <div>{books}</div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    allBooks: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBooks: (books) => dispatch(actionCreator.fetchBooks(books)),
    onAddCart: () => dispatch(actionCreator.addCarts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBook);


