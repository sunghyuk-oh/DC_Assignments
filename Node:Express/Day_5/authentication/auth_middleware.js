function authenticate(req, res, next) {
    if (req.session) {
        if (req.session.username) {
            next()
        } else {
            res.redirect('/users')
        }
    } else {
        res.redirect('/users')
    }
}

module.exports = authenticate