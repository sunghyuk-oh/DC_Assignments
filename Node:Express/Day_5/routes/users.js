const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    registeredUser = users.find((user) => {
        return user.username == username && user.password == password
    })

    if (registeredUser) {
        if (req.session) {
            req.session.username = registeredUser.username
        }
        res.render('loggedIndex', { message: `Welcome, ${registeredUser.username}` })
    } else {
        res.redirect('/users')
    }
})


router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        res.clearCookie('connect.sid')
        res.redirect('/users')
    })
})

router.post('/logout', (req, res) => {
    res.redirect('/users/logout')
})


router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.post('/signUp', (req, res) => {
    const username = req.body.username
    const password = req.body.username

    users.push({ id: uuidv4(), username: username, password: password })
    console.log(users)
    res.render('index', { message: 'Sign up was successful. Please Log in.' })
})

module.exports = router