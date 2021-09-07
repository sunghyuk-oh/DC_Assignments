function authenticate(req, res, next) {
    if (req.session) {
        if (req.session.username) {
            next()
        } else {
            res.render('index', { errorMessage: 'You need to log in first.' })
        }
    } else {
        res.render('index', { errorMessage: 'You need to log in first.' })
    }
}

module.exports = authenticate