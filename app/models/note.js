const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  titlte: String,
  body: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})