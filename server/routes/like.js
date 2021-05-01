const router = require('express').Router()
const LikeController = require('../controllers/likeController')

router.post('/', LikeController.addLike)

module.exports = router