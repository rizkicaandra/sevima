const { Post, Comment, Like } = require('../models/index')

class PostController{

  static addPost(req, res, next){
    const newPost = {
      imageName: req.body.imageName,
      text: req.body.text,
      UserId: +req.user.id
    }

    Post.create(newPost)
      .then( post => {
        res.status(201).json({post})
      })
      .catch( err => {
        err.from = 'postController - addPost'
        next(err)
      })
  }

  static showAllPost(req, res, next){

    Post.findAll({
      include:[{
        model: Comment
      },{
        model: Like
      }]
    })
    .then( allPost => {
      res.status(200).json(allPost)
    })
    .catch( err => {
      err.from = 'postController - ShowAllPost'
      next(err)
    })

  }

  static showPostByUser(req, res, next){
    Post.findAll({
      where:{
        UserId: req.user.id
      },
      include:[{
        model: Comment
      },{
        model: Like
      }]
    })
    .then( allPost => {
      res.status(200).json(allPost)
    })
    .catch( err => {
      err.from = 'postController - showPostByUser'
      next(err)
    })
  }
}

module.exports = PostController