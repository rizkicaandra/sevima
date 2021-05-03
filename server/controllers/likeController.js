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

  static destroyLike(req, res, next){

    Like.destroy({
      where:{
        id: +req.params.id
      }
    })
    .then( response => {
      if(!response){
        throw {
          name : 'Custom_Error',
          message : 'Error Not Found',
          status : 404
        }
      } else {
        res.status(200).send({ message: 'Data like is succesfully deleted'})
      }
    })
    .catch( err => {
      err.from = 'Like Controller - Delete Banner'
      next(err)
    })
  }
}

module.exports = LikeController