const updateBtn = document.getElementById('updateBtn')
const updateForm = document.getElementById('updateForm')
const commentTextbox = document.getElementById('commentTextbox')
const commentBody = document.getElementById('commentBody')
const idTextBox = document.getElementById('idTextBox')
const commentsDisplay = document.getElementById('commentsDisplay')

updateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    updateForm.style.display = "block"
})

function displayComments() {
    fetch('http://localhost:3000/api/get-comments')
        .then(response => response.json())
        .then(comments => {
            const commentItems = comments.map((comment) => {
                console.log(comment)
                return `<p>${comment.body}</p>`
            })
            commentsDisplay.innerHTML = commentItems.join('')
        })
}

commentTextbox.addEventListener('submit', (e) => {
    e.preventDefault()

    const comment = commentBody.value
    const postId = idTextBox.value

    fetch('http://localhost:3000/leave-comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                comment: comment,
                postId: postId
            })
        }).then(response => response.json())
        .then(result => {
            displayComments()
        })
})