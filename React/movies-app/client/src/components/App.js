import { useEffect } from 'react'
import { connect } from 'react-redux'

// import './App.css';

function App(props) {

  useEffect(() => {
    fetch('http://localhost:8080/view-movies')
    .then(response => response.json())
    .then(dcMovies => {
      props.onDisplayMovies(dcMovies)
    })
    .catch(e => console.error(e))
  }, [])

  

  const movieLists = props.movies.map((movie, index) => {
    return (
      <div key={index}>
        <img src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <p>Price: ${movie.price}</p>
        <button onClick={() => props.onAddToCart(movie.Poster, movie.Title, movie.Year, movie.price)}>Add to cart</button>
      </div>
    )
  })

  return (
    <main className="App">
      <h1> DC Hero Movies </h1>
      <section>
        {movieLists}
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.allMovies 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDisplayMovies: (m) => dispatch({type: 'DISPLAY', payload: m}),
    onAddToCart: (poster, title, year, price) => dispatch({type: 'ADD_CART', payload: {poster: poster, title: title, year: year, price: price}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
