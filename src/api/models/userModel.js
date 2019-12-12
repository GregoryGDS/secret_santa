/* nmp i mongoose = lib permet de "parler" avec bdd*/
/* model = defini structure info à envoyer dans bdd*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name_user: {
    type: String,
    required: "Le nom est requis"
  },
  created_at : {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);/*User nom donnée, userSchema à partir de, défini plus haut*/