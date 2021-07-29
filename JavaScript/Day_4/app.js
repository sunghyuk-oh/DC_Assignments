const mainContent = document.getElementById("mainContent")
const dropdownMenu = document.getElementById("dropdownMenu")
const newsInfo = news.articles
const sourcesInfo = sources.sources


// Adding the articles into the main content div
function display_articles(articles) {
    const articleContents = articles.map((article) => {
        if (article.title == null) {
            article.title = ""
        }
        if (article.author == null) {
            article.author = ""
        }
        if (article.description == null) {
            article.description = ""
        }
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
}

display_articles(newsInfo)


// HARDER MODE
const dropdownOptions = sourcesInfo.map(function(source) {
    return `<option value="${source.name}">${source.name}</option>`
})
dropdownMenu.insertAdjacentHTML('beforeend', dropdownOptions)


dropdownMenu.addEventListener("change", function(e) {
    if (e.target.menu == "All articles") {
        display_articles(newsInfo)
    } else {
        const filterSourcesNames = newsInfo.filter((article) => {
            return article.source.name === e.target.value
        })
        if (filterSourcesNames.length == 0) {
            alert("The article not found!")
        } else {
            display_articles(filterSourcesNames)
        }
    }
})