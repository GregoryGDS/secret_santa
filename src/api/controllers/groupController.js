const mongoose = require('mongoose');
const groupModel = require('../models/groupModel');

const userController = require('../controllers/userController');
const User = mongoose.model("User");//User nom donnée dans model

/*const userModel = require('../models/userModel');*/

const group = mongoose.model("Group");
// req = fonction callback request (post,get ...)
// res=statut

exports.get_all_groups = (req, res) => {
  group.find({}, (error, posts) => {
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

exports.create_a_group = (req, res) => {
  req.body.group_id = req.params.group_id;
  let new_group = new group(req.body);

  new_group.save((error, post) => {
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
exports.get_a_group = (req, res) => {
  group.findOne({name_group:req.params.name_group}, (error, group) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(group);
    }
  })
}
//new:true veut envoi resource modifié
exports.update_a_group = (req, res) => {
  group.findOneAndUpdate({name_group: req.params.name_group}, req.body, {new: true}, (error, group) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(group);
    }
  })
}

//req.params = param en url
exports.delete_a_group = (req, res) => {
  group.remove({name_group: req.params.name_group}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Groupe supprimé"});
    }
  })
}

exports.shuffleTotal = (req, res) => {
  let all_groups = group.find({}); // all_groups contient la promise
  all_groups.then(groupe => { // une fois que la promise est éxectuer

    var all_group_user = [];
    groupe.forEach(one_groupe => {
      let one_user_group=[];
      User.find({name_group:one_groupe['name_group']}).then(user_group => {
        user_group.forEach(one_user => {
          //console.log(one_user['name_group']+' : '+one_user['name_user']);
          one_user_group.push(one_user['name_user']);
        });//fin foreach
        return one_user_group;
      })
      .then(resultat => {
        all_group_user.push(resultat);
      })

    });//fin foreach
    console.log(all_group_user);
  })
}
