const { Comment } = require('../models/index')

class CommentController{
  static addComment(req, res, next){
    const newComment = {
      text: req.body.text,
      UserId: req.user.id,
      PostId: +req.body.PostId
    }

    Comment.create(newComment)
      .then( comment => {
        res.status(201).json({ comment })
      })
      .catch( err => {
        err.from = 'commentController - addComment'
        next(err)
      })

  }
}

module.exports = CommentController