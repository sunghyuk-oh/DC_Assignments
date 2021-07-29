const mainContent = document.getElementById("mainContent")
const dropdownMenu = document.getElementById("dropdownMenu")
const newsInfo = news.articles
const sourcesInfo = sources.sources

console.log(sourcesInfo[0].name)
console.log(newsInfo[0].source.id)


// Adding the articles into the main content div
const articleContents = newsInfo.map((article) => {
    // if (Object.values(article) == null) {
    //     Object.values(article) = "None"
    // }
    return `
        <div id="article"> 
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <p>Published At ${article.publishedAt}</p>
            <p>Author: ${article.author}</p>
            <img src="${article.urlToImage}">
            <p><a href="${article.url}">Click here to read the article</a> || <a href="${article.urlToImage}">Click here for the image</a></p>
        </div>    
    `
})
mainContent.innerHTML = articleContents.join("")


// Creating the source dropdown menu options
const dropdownOptions = sourcesInfo.map(function(source) {
    return `<option value="${source.name}">${source.name}</option>`
})
dropdownMenu.innerHTML = dropdownOptions.join("")




const newsSources = newsInfo.map((article) => {
    return article.source
})
const sourcesNames = newsSources.map((name) => {
    return name.name
})
console.log(sourcesNames)

dropdownMenu.addEventListener("change", function(e) {
    console.log(e.target.value)
})