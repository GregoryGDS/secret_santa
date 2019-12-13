const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groupSchema = new Schema({
  name_group: {
    type: String,
    required: "Le nom du groupe est requis",
    unique: true
  },
  created_at : {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Group', groupSchema);