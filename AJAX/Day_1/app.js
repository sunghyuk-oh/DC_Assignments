const container = document.getElementById("container")
const movieLists = document.getElementById("movieLists")
const batmanURL = 'https://www.omdbapi.com/?s=Batman&page=2&apikey=998cd74d'

const result = new XMLHttpRequest()
result.open("GET", batmanURL)
result.send()

// // 2. Calling the movie details from the second API file
function displayDetails(btn) {
    const movieId = btn.getAttribute('data-movieId')

    const selectedMovie = `https://www.omdbapi.com/?i=${movieId}&apikey=998cd74d`

    const detailsResult = new XMLHttpRequest()
    detailsResult.open("GET", selectedMovie)
    detailsResult.send()

    detailsResult.addEventListener("load", function() {
        const details = JSON.parse(this.responseText)

        const detailItem = `  
                <div id="title-image">
                    <h2>${details.Title}</h2>
                    <img src="${details.Poster}">
                </div>
                <div id="moreDescription">
                    <p><b>Year:</b> ${details.Year}</p>
                    <p><b>Director:</b> ${details.Director}</p>
                    <p><b>Actors:</b> ${details.Actors}</p>
                    <p><b>Rated:</b> ${details.Rated}</p>
                    <p><b>Genre:</b> ${details.Genre}</p>
                    <p><b>Plot:</b> ${details.Plot}</p>
                </div>
                `

        container.innerHTML = detailItem
    })
}

// 1. Calling the movie titles from the first API file
result.addEventListener("load", function() {
    const batmanMovies = JSON.parse(this.responseText)

    let movieItems = batmanMovies.Search.map(function(movieItem) {
        const item = `
            <li class="movie">
                <img src="${movieItem.Poster}"></img>
                <p><b>${movieItem.Title}</b></p>
                <button data-movieId='${movieItem.imdbID}' onclick="displayDetails(this)">Show Details</button>
            </li>`

        return item
    })
    movieLists.innerHTML = movieItems.join("")
})