import React, { Component } from 'react'
import './App.css';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      allBooks: []
    }
  }
  
  componentDidMount = () => {
    fetch('http://localhost:8080/api/books')
    .then(response => response.json())
    .then(books => {
      this.setState({
        allBooks: books
      })
    })
  }

  render() {
    const books = this.state.allBooks.map(book => {
      return (
        <div id="eachBook">
          <img src={book.imageURL} />
          <h2>{book.title}</h2>
          <p><b>Genre:</b>{book.genre}</p>
          <p><b>Publisher:</b>{book.publisher}</p>
          <p><b>Year:</b>{book.year}</p>
        </div>
      )
    })  

    return(
      <div>{books}</div>
    )
  }
}

export default App;
