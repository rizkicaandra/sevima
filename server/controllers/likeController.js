const { Like } = require('../models/index')

class LikeController{
  static addLike(req, res, next){
    const newLike = {
      UserId: req.user.id,
      PostId: +req.body.PostId
    }

    Like.create(newLike)
      .then( like => {
        res.status(201).json({ like })
      })
      .catch( err => {
        err.from = 'likeController - addLike'
        next(err)
      })

  }
}

module.exports = LikeController