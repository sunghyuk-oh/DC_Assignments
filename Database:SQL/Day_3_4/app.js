global.express = require('express')
const app = express()

require('dotenv').config()

const mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

global.session = require('express-session')
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
}))

app.use(express.urlencoded())

global.models = require('./models')

global.bcrypt = require('bcryptjs')

global.authentication = require('./authentication/auth')

const indexRouter = require('./routers/index')
app.use('/index', indexRouter)

const blogRouter = require('./routers/blog')
app.use('/blog', authentication, blogRouter)



app.listen(3000, () => { console.log('Server is running...') })