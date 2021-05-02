const router = require('express').Router()
const PostController = require('../controllers/postController')

router.post('/', PostController.addPost)

router.get('/', PostController.showAllPost)

router.get('/profil', PostController.showPostByUser)

module.exports = router