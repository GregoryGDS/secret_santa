const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let whish_listSchema = new Schema({
  name_whish: {
    type: String,
    required: "Le nom est requis"
  },
  created_at : {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model('whish_list', whish_listSchema);