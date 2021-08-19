const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('userRegister')
})

router.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({ username: username, password: password })
    console.log(users)
    res.render('userRegister', { message: `Signing up was successful, ${username}!` })
})

router.post('/checkLogin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let persistedUser = users.find((user) => {
        return user.username == username && user.password == password
    })

    if (persistedUser) {
        if (req.session) {
            req.session.username = persistedUser.username
        }
        res.render('trips', { message: `welcome ${persistedUser.username}!` })
    } else {
        res.render('userRegister', { errorMessage: 'The username of password is incorrect' })
    }
})

module.exports = router