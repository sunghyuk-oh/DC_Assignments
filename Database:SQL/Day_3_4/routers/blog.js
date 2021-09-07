const router = express.Router()

router.get('/', async(req, res) => {
    const blogs = await models.Blog.findAll({})
    res.render('loggedIndex', { allBlogs: blogs })

})

router.get('/post-blog', (req, res) => {
    res.render('blogPost')
})

router.post('/add-blog', async(req, res) => {
    const { title, bodyText, postDate } = req.body

    const blog = models.Blog.create({
        title: title,
        body: bodyText,
        user_id: req.session.user_id
    })
    res.render('loggedIndex', { blogs: blog })
})

module.exports = router