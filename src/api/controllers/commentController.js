const mongoose = require('mongoose');
const commentModels = require('../models/commentModels');

const Comment = mongoose.model("Comment");
// req = fonction callback request (post,get ...)
// res=statut

exports.get_all_comments = (req, res) => {
  Comment.find({post_id: req.params.post_id}, (error, posts) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(posts);
    }
  })
}

exports.create_a_comment = (req, res) => {
  req.body.post_id = req.params.post_id;
  let new_comment = new Comment(req.body);

  new_comment.save((error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(post);
    }
  })
}
// _id => on cherche par id avec id passé en param (req.params.id) 
exports.get_a_comment = (req, res) => {
  Comment.findById(req.params.comment_id, (error, comment) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(comment);
    }
  })
}
//new:true veut envoi resource modifié
exports.update_a_comment = (req, res) => {
  Comment.findOneAndUpdate({_id: req.params.comment_id}, req.body, {new: true}, (error, comment) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(comment);
    }
  })
}

//req.params param en url
exports.delete_a_comment = (req, res) => {
  Comment.remove({_id: req.params.comment_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Commentaires supprimé"});
    }
  })
}