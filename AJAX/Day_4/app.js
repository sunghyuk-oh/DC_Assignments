const displayNewsUL = document.getElementById("displayNewsUL")
const ID_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'


function displayNews(newsItems) {
    const news = `<li> <b>Title:</b> ${newsItems.title}  <b>| By:</b> ${newsItems.by} <b>| Url:</b> ${newsItems.url}  <b>| Time:</b>${newsItems.time} </li>`
    displayNewsUL.insertAdjacentHTML('beforeend', news)
}

async function sortNewsById(idData) {
    for (let i = 0; i < idData.length; i++) {
        try {
            let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${idData[i]}.json?print=pretty`)
            let newsItems = await response.json()
            displayNews(newsItems)
        } catch (error) {
            console.log(error)
        }
    }
}

async function findId(idDownloaded) {
    let response = await fetch(ID_URL)
    let newsId = await response.json()
    idDownloaded(newsId)
}

findId((idData) => sortNewsById(idData))