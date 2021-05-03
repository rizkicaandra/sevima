const router = require('express').Router()
const LikeController = require('../controllers/likeController')

router.post('/', LikeController.addLike)

router.delete('/:id', LikeController.destroyLike)

module.exports = router