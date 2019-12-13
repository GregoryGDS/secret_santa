const mongoose = require('mongoose');
const whish_listModel = require('../models/whish_listModel');

const whish_list = mongoose.model("whish_list");
// req = fonction callback request (wish,get ...)
// res = response

exports.get_list_whish_from_user = (req, res) => {
  whish_list.find({user_id:req.params.user_id}, (error, whish) => {
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

exports.create_a_whish_from_user = (req, res) => {
  req.body.user_id = req.params.user_id;
  let new_whish = new whish_list(req.body);

  new_whish.save((error, wish) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(wish);
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