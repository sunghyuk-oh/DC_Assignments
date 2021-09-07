const router = express.Router()

router.get('/', async(req, res) => {
    const blogs = await models.Blog.findAll({})
    res.render('index', { allBlogs: blogs })
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { firstName, lastName, username, password } = req.body

    bcrypt.hash(password, 10, (error, hash) => {
        if (!error) {
            models.User.create({
                    username: username,
                    password: hash,
                    first_name: firstName,
                    last_name: lastName
                })
                .then(savedUser => {
                    res.render('login', { message: 'Sign up successful' })
                })
        } else {
            res.render('register', { errorMessage: 'Please try again.' })
        }
    })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    models.User.findOne({
            where: {
                username: username
            }
        })
        .then((foundUser) => {
            bcrypt.compare(password, foundUser.password, (error, result) => {
                if (result) {
                    if (req.session) {
                        req.session.user_id = parseInt(foundUser.id)
                        req.session.username = username
                        req.session.first_name = foundUser.first_name
                    }
                    // res.render('loggedIndex', { welcomeMsg: `Welcome, ${foundUser.first_name}` })
                    res.redirect('/blog')
                } else {
                    res.render('login', { errorMessage: 'username or password is incorrect.' })
                }
            })
        })
})

router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        req.clearCookie('connect.sid')
    })
})

router.post('/logout', (req, res) => {
    res.redirect('/index')
})

module.exports = router