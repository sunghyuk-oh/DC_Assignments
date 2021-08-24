const updateBtn = document.getElementById('updateBtn')
const updateForm = document.getElementById('updateForm')
const commentTextbox = docuemnt.getElementById('commentTextbox')
const commentBody = document.getElementById('commentBody')

updateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    updateForm.style.display = "block"
})

commentTextbox.addEventListener('submit', (e) => {
    e.preventDefault()

    const comment = commentBody.value


})