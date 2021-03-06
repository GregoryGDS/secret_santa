const mongoose = require('mongoose');
const userModel = require('../models/userModel');//recupère ce qu'on a export

const User = mongoose.model("User");//User nom donnée dans model
// req = fonction callback request (user,get ...)
// res=statut

exports.list_all_users = (req, res) => {
  User.find({}, (error, users) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(users);
    }
  })
}
//.save() = stockage de l'objet en bdd
exports.create_a_user = (req, res) => {
  let new_user = new User(req.body);
  console.log(req);
  new_user.save((error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);//status création
      res.json(user);
    }
  })
}

exports.get_a_user = (req, res) => {
  User.findById(req.params.user_id, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}

exports.update_a_user = (req, res) => {
  User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}

exports.delete_a_user = (req, res) => {
  User.remove({_id: req.params.user_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Article supprimé"});
    }
  })
}


//affiche tous les users d'un groupe name_group: req.params.name_group
exports.get_all_user_in_group = (req, res) => {
  User.find({name_group:req.params.name_group}, (error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}