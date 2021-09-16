import './css/App.css'
import { connect } from 'react-redux'
import * as actionCreator from '../stores/creators/actionCreate'

function DisplayBook(props) {

  // Add the books to the cart
  const handleAddCart = (bookIdentifier) => {

    fetch('http://localhost:8080/api/add-cart', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "bookId": bookIdentifier })
    })
    .then(response => response.json())
    .then((result) => {
        if (result.success) {
            console.log('the book has been added to the cart')
            props.onAddCartItems()
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
    <section id="book-display">
      {books}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    allBooks: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCartItems: () => dispatch(actionCreator.fetchCartItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBook);


