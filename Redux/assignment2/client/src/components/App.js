import './css/App.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import DisplayBook from './DisplayBook'
import * as actionCreator from '../stores/creators/actionCreate'

function App(props) {
  
  // Fetching the books from the database
  useEffect(() => {
    props.onFetchBooks()
  }, [])

  return (
    <main className="main-content">
      <h1>Books</h1>
      <DisplayBook />
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
    onFetchBooks: () => dispatch(actionCreator.fetchBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


