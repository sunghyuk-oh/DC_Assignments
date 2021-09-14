import './css/App.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import * as actionCreator from '../stores/creators/actionCreate'

function App(props) {
  
  useEffect(() => {
    fetch('http://localhost:8080/api/books')
    .then(response => response.json())
    .then(books => {
      props.onFetchBooks(books)
    })
  }, [])

  const books = props.allBooks.map(book => {
    return <div key={book.book_id} className="eachBook">
              <img src={book.imageurl} />
              <h3>{book.title}</h3>
              <p><b>Genre:</b>{book.genre}</p>
              <p><b>Year:</b>{book.year}</p>
              <p><b>Publisher:</b>{book.publisher}</p>
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
    onFetchBooks: (books) => dispatch(actionCreator.fetchBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// { type: 'FETCH_BOOKS', payload: books }
