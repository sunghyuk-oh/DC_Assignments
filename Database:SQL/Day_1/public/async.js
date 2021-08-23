const updateBtn = document.getElementById('updateBtn')
const updateForm = document.getElementById('updateForm')

updateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    updateForm.style.display = "block"
})