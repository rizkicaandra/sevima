const { Post, Comment, Like } = require('../models/index')

class PostController{

  static addPost(req, res, next){

    console.log(req.body, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

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

  static uploadFile(req, res, next){
    let file;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    file = req.files.file;
    uploadPath = '../client/public/uploads/' + file.name;

    file.mv(uploadPath, function(err) {
      if(err){
        return res.status(500).json({ msg: err})
      }

      res.status(200).json({ msg: "file succesfully uploaded", fileName: file.name, filePath: `/uploads/${file.name}`})
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

  static showDetailPostById(req, res, next){

    Post.findByPk(+req.params.id,{
      include:{ all: true, nested: true}
    })
    .then( response => {
      res.status(200).json(response)
    })
    .catch( err => {
      err.from = 'postController - showDetailPostById'
      next(err)
    })
  }

  static statusPostLike(req, res, next){

    let status = false
    let idLike = 0

    Post.findByPk(+req.params.id,{
      include:{ all: true, nested: true}
    })
    .then( response => {

      for(let i = 0; i < response.Likes.length; i++){
        if(response.Likes[i].UserId === req.user.id){
          status = true
          idLike = response.Likes[i].id
        }
      }
      
      res.status(200).json({ status: status, idLike})
    })
    .catch( err => {
      err.from = 'postController - showDetailPostById'
      next(err)
    })
  }
}

module.exports = PostController