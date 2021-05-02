const router = require('express').Router()
const authenticate = require('../middlewares/authenticate')
const userRouter = require('./user')
const postRouter = require('./post')
const commentRouter = require('./comment')
const likeRouter = require('./like')

// route user
router.use('/users', userRouter)

// authenticate
router.use(authenticate)

// route post
router.use('/posts', postRouter)

// route comment
router.use('/comments', commentRouter)

// router like
router.use('/likes', likeRouter)

module.exports = router