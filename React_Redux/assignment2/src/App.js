import React, { Component } from 'react'
import './App.css';
import BooksDisplay from './BooksDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchWords: '',
      allBooks: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      this.setState({
        allBooks: books
      })
    })
  }

  findWords = (e) => {
    this.setState({
      searchWords: e.target.value
    })
  }

  searchBooks = () => {
    console.log(this.state.searchWords)

    const filteredBooks = this.state.allBooks.filter(book => {
      return book.language.toLowerCase() == this.state.searchWords.toLowerCase()
    })

    this.setState({
      allBooks: filteredBooks
    })
  }

  render() {
    return (
      <div id="main-content">
        <section className="menu">
          <a href="http://localhost:3000/">Home</a>
        </section>
        <section className="searchBooks">
            <input type="text" onChange={this.findWords} />
            <button onClick={this.searchBooks}>Search</button>
        </section>
        <BooksDisplay books={this.state.allBooks} />
      </div>
    )
  }
}

export default App;
