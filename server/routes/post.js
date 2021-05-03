const router = require('express').Router()
const PostController = require('../controllers/postController')

router.post('/', PostController.addPost)

router.get('/', PostController.showAllPost)

router.get('/profil', PostController.showPostByUser)

router.post('/upload', PostController.uploadFile)

router.get('/detail/:id', PostController.showDetailPostById)

router.get('/status/:id', PostController.statusPostLike)

module.exports = router