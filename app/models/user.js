const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true , unique: true},
  password: {type: String, required: true },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

userSchema.pre('save', function(next){
  if (this.isNew || this.isModified('password')) {
     bcrypt.hash(this.password, 10,
      (err, hashedPassword) => {
        if (err)
          next(err)
        else {
          this.password = hashedPassword;
          next();
        }
      }
    )
  }
});

module.exports = mongoose.model('User' , userSchema);