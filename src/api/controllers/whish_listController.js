const mongoose = require('mongoose');
const whish_listModel = require('../models/whish_listModel');

const whish_list = mongoose.model("whish_list");
// req = fonction callback request (post,get ...)
// res=statut

exports.get_all_whishs = (req, res) => {
  whish_list.find({user_id: req.params.user_id}, (error, posts) => {
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

exports.create_a_whish = (req, res) => {
  req.body.user_id = req.params.user_id;
  let new_whish = new whish_list(req.body);

  new_whish.save((error, post) => {
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
exports.get_a_whish = (req, res) => {
  whish_list.findById(req.params.whish_id, (error, whish) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(whish);
    }
  })
}
//new:true veut envoi resource modifié
exports.update_a_whish = (req, res) => {
  whish_list.findOneAndUpdate({_id: req.params.whish_id}, req.body, {new: true}, (error, whish) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(whish);
    }
  })
}

//req.params = param en url
exports.delete_a_whish = (req, res) => {
  whish_list.remove({_id: req.params.whish_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Souhait supprimé"});
    }
  })
}