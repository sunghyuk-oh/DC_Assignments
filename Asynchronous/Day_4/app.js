// DESCRIPTION 
// You will use the following service to get all the story IDs.
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
// After getting all the story IDs you will use each story ID to fetch the story from using the following end point.
// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// (Plug in the story ID in the place of 8863 in the above example)
// Display the following information about each story: title / url / by / time


const displayNewsUL = document.getElementById("displayNewsUL")
const ID_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'


function displayNews(newsItems) {
    const news = `<li> <b>Title:</b> ${newsItems.title}  <b>| By:</b> ${newsItems.by} <b>| Url:</b> ${newsItems.url}  <b>| Time:</b>${newsItems.time} </li>`
    displayNewsUL.insertAdjacentHTML('beforeend', news)
}

async function sortNewsById(idData, newsDownloaded) {
    for (let i = 0; i < idData.length; i++) {
        try {
            let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${idData[i]}.json?print=pretty`)
            let newsItems = await response.json()
            newsDownloaded(newsItems)
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

findId((idData) => {
    sortNewsById(idData, (newsItem) => {
        displayNews(newsItem)
    })
})