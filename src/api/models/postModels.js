/* nmp i mongoose = lib permet de "parler" avec bdd*/
/* models = defini structure info à envoyer dans bdd*/

  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: "Le titre est requis"
  },
  content: {
    type: String,
    required: true
  },
  created_at : {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);/*Post nom donnée, postSchema à partir de, défini plus haut*/